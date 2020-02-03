import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../../components/collection/collection.component';
import './shop.styles.scss';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <div className='grid'>
      <Route exact path={`${match.path}/`} component={CollectionsOverview}></Route>
      <Route path={`${match.path}/:id`} component={Collection}></Route>
    </div>
  </div>
);

export default ShopPage;