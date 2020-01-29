import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-section.styles.scss';

const CollectionSection = ( {title, items} ) => (
  <div className='collection-section'>
    <h2 className='title'>{title.toUpperCase()}</h2>
    <div className='collection-list'>
      {items
        .filter((item, index) => index < 4)
        .map( item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

export default CollectionSection;