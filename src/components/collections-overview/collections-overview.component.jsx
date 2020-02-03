import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionForOwerview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    <h1 className='collections-overview-title'>Collections</h1>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionForOwerview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);