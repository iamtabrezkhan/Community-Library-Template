import React, { Component } from 'react'
import Classes from './SignUp.module.css'
import Form from '../../shared/components/Form/Form';

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.onSignup = this.onSignup.bind(this);
        this.onFacebookSignup = this.onFacebookSignup.bind(this);
        this.onGoogleSignup = this.onGoogleSignup.bind(this);
    }

    render() {
        return (
            <div className={Classes.main}>
                <Form {...this.props} type="signup" onSignup={this.onSignup} onFacebookSignup={this.onFacebookSignup} onGoogleSignup={this.onGoogleSignup} />
            </div>
        )
    }

    onSignup() {
        alert('signup cliked!');
    }

    onFacebookSignup() {
        alert('facebook signup cliked!');
    }

    onGoogleSignup() {
        alert('google signup cliked!');
    }

}

export default SignUp