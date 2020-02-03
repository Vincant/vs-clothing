import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { moreCollectionItems } from '../../redux/shop/shop.actions';
import './collection.styles.scss';

const Collection = ({ collection, moreCollectionItems }) => {
  const {title, items, btnState} = collection;
  
  return(
    <div className='collection'>
      <h1 className='collection-title'>{title}</h1>
      <div className='collection-list'>
        {items
          .map( item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
      {
        btnState
        ? (<CustomButton customClassName='show-more' onClick={() => moreCollectionItems()}>show more</CustomButton>)
        : null
      }
    </div>
  );
}

const mapStateToProps = (state, props) => ({   // props = all component's props
  collection: selectCollection(props.match.params.id)(state),   //exemple, id = 'hats'
});

const mapDispatchToProps = dispatch => ({
  moreCollectionItems: () => dispatch(moreCollectionItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Collection);