import React, { Component } from 'react'
import Classes from './Login.module.css'
import Form from '../../shared/components/Form/Form';

export class Login extends Component {

    constructor(props) {
        super();
        this.onLogin = this.onLogin.bind(this);
        this.onFacebookLogin = this.onFacebookLogin.bind(this);
        this.onGoogleLogin = this.onGoogleLogin.bind(this);
    }

    render() {
        return (
            <div className={Classes.main}>
                <Form {...this.props} type="login" onLogin={this.onLogin} onFacebookLogin={this.onFacebookLogin} onGoogleLogin={this.onGoogleLogin} />
            </div>
        )
    }

    onLogin() {
        alert('login cliked!');
    }

    onFacebookLogin() {
        alert('facebook login cliked!');
    }

    onGoogleLogin() {
        alert('google login cliked!');
    }

}

export default Login