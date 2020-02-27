import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'; // routing
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; // authentication
import { connect } from 'react-redux';  // redux
import { setCurrentUser } from './redux/user/user.actions'; // redux action
import { selectCurrentUser } from './redux/user/user.selectors';  // user selector
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
//import Page404 from './pages/404/404.component';
//import { addCollectionAndDocuments } from './firebase/firebase.utils'; // init collections
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors'; // init collections
import './App.scss';

class App extends React.Component {
  
  componentDidMount(){
    const {setCurrentUser} = this.props
    //const {setCurrentUser, collectionsAray} = this.props  // init collections
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      } 
      else{
        setCurrentUser(userAuth);
      }
      /*use just one times for create database (collections) in Firebase. (init collections)
        addCollectionAndDocuments('collections', collectionsAray); // base variant (key, array); // init collections
        addCollectionAndDocuments('collections', collectionsAray.map( ({title, items}) => ({title, items}) ));  (refactor database, use just title and items)
      */
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className='App'>
        <div className='wrapper'>
          <Header />
          
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
            <Route path='/contact' component={ContactPage}></Route>
            <Route 
              exact 
              path='/signin' 
              render={() => this.props.currentUser 
                ? (<Redirect to='/' />) 
                : (<SingInAndSignUpPage />)
              } 
            />
            <Route exact path='/checkout' component={CheckoutPage}></Route>
            <Route render={() => (<Redirect to='/' />)}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

//from State put prop to Props  // used Library Reselect
const mapStateToProps = (state) => ({      
  currentUser: selectCurrentUser(state)
  //collectionsAray: selectCollectionsForPreview(state)  // init collections
})

//from Dispatch put Actions to Props
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
