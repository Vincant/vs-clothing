import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SingInAndSignUpPage = () => (
  <div className='auth-page'>
    <div className='grid'>
      <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>
    </div>
  </div>
)

export default SingInAndSignUpPage;