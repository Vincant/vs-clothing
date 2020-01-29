import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      // this clear form
      this.setState({ email: '', password: '' });
    } catch(error){
      console.error(error);
    }
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({ [name]: value });
  }

  render(){
    const {email, password} = this.state;

    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            label='email'
            value={email} 
            handleChange={this.handleChange} 
            required
          />
          <FormInput 
            name='password' 
            type='password' 
            label='password'
            value={password} 
            handleChange={this.handleChange} 
            required
          />
          <div className='buttons-holder'>
            <CustomButton customClassName='sign-in-btn' type='submit'>Sign In</CustomButton>
            <CustomButton customClassName='google-btn' onClick={signInWithGoogle}>Sign In with Google</CustomButton>
            <CustomButton customClassName='facebook-btn' onClick={signInWithFacebook}>Sign In with Facebook</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;