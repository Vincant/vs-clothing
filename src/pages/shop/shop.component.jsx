import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../../components/collection/collection.component';
import { firestore, convertCollectionsSnapShot } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import './shop.styles.scss';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);  // HOC
const CollectionWithSpinner = Spinner(Collection);                    // HOC

class ShopPage extends React.Component {
  state = {
    loading: true
  }
  
  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapShot(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  };

  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className='shop-page'>
        <div className='grid'>
          <Route exact path={`${match.path}/`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} ></Route>
          <Route path={`${match.path}/:id`} render={(props) => (<CollectionWithSpinner isLoading={loading} {...props} />)} ></Route>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);