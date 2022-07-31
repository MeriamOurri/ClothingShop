import React from "react";
import { CustomButton } from "../custom-button/custom-button";
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

   handleSubmit = (event) => 
   {
        event.preventDefault();
        this.setState({ email:'', password: '' });
   }
    handleChange = (event) =>
    {
        const {name, value} = event.target;
        this.setState({ [name] : value });
    }

   
    render()
    {
        return(
            <div className="singnIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                   <div className="group">
                        <input type="email" name="email" id="email" className="form-input" onChange={this.handleChange} value={this.state.email} required/>
                        <label htmlFor="email" className="form-input-label">Email</label>
                    </div>
                    <div className="group">
                        <input type="password" name="password" id="password" className="form-input" onChange={this.handleChange} value={this.state.password} required/>
                        <label htmlFor="password" className="form-input-label">Password</label>
                    </div>
                    <CustomButton className="custom-button" type="submit" value="Submit" >Sign In</CustomButton>
                    <CustomButton className="custom-button" onClick={ signInWithGoogle } >
                       
                        Sign In With Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;