import React from 'react';
import SignIn from '../components/sign-in/sign-in';
//import SignUp from '../components/sign-up/sign-up';
import './sign-in-up.styles.scss';

export const SignInUp = () =>
{
    return(
        <div className="signInUp">
            <SignIn/>
        </div>

    );
}