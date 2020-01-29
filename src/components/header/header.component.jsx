import React from 'react';
import { Link } from 'react-router-dom'; // routing
import { auth } from '../../firebase/firebase.utils';  // need for use auth.signOut() method
import { connect } from 'react-redux';  // need for use Store (state)
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';  // need if grouped selectors
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import './header.styles.scss';

const Header = ({ currentUser, hiddenCart }) => (
  <div className='header'>
    <div className='grid'>
      <Link to='/' className='logo'>
        <Logo></Logo>
      </Link>
      <ul className='nav-menu clear-ul'>
        <li>
          <Link className='link' to='/shop'>SHOP</Link>
        </li>
        <li>
          <Link className='link' to='/contact'>CONTACT</Link>
        </li>
        <li>
          {
            currentUser 
              ? (<div className='link' onClick={() => auth.signOut()}>SIGN OUT</div>)
              : (<Link className='link' to='/signin'>SIGN IN</Link>)
          }
        </li>
        <li>
          <CartIcon />
          { 
            hiddenCart 
              ? null 
              : (<CartDropdown />)
          }
        </li>
      </ul>
    </div>
  </div>
)
 //from State put to Props
// const mapStateToProps = (state) => ({   // without Library Reselect
//   currentUser: state.user.currentUser,
//   hiddenCart: state.cart.hiddenCart
// })

// const mapStateToProps = (state) => ({     // used Library Reselect, base way
//   currentUser: selectCurrentUser(state),
//   hiddenCart: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({  // alternate easy way, grouped selects
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden
})

export default connect(mapStateToProps)(Header); // connect props to Header component use Redux