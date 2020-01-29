import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionSection from '../../components/collection-section/collection-section.component';
import './shop.styles.scss';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    <div className='grid'>
      <div className='collection-preview'>
        <h1 className='title'>Collections</h1>
        {
          collections.map(({id, ...collection}) => (
            <CollectionSection key={id} {...collection}></CollectionSection>
          ))
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(ShopPage);