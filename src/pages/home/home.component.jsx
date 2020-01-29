import React from 'react';
import Directory from '../../components/directory/directory.component';
import './home.styles.scss';

const HomePage = () => (
  <div className='home-page'>
    <div className='grid'>
      <Directory></Directory>
    </div>
  </div>
)

export default HomePage;