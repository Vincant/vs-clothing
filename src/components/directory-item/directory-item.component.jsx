import React from 'react';
import { withRouter } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({title, imageUrl, size, linkUrl, history, match}) => {
  return(
    <div className={`directory-item  ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
      <div className='box'>
        <img className='image' src={imageUrl} alt='' />
        <div className='content'>
          <h2 className='title'>{title.toUpperCase()}</h2>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter( DirectoryItem);