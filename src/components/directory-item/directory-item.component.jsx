import React from 'react';
import { withRouter } from 'react-router-dom';  // need for use history.push
import { connect } from 'react-redux';
import { clearDisplayedItems } from '../../redux/shop/shop.actions';
import './directory-item.styles.scss';

const DirectoryItem = ({title, imageUrl, linkUrl, history, match, clearDisplayedItems}) => (
  <div className={`directory-item`} onClick={() => {
    history.push(`${match.url}${linkUrl}`);
    clearDisplayedItems();
  }}>
    <div className='box'>
      <div className='image'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  clearDisplayedItems: () => dispatch(clearDisplayedItems())
});

export default withRouter(connect(null, mapDispatchToProps)(DirectoryItem));