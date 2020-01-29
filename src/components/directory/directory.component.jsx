import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory'>
    {sections.map( (section) => (
      <DirectoryItem key={section.id} {...section}></DirectoryItem>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);