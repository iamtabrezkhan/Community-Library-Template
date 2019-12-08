import React, { Component } from 'react'
import Classes from './Navbar.module.css'
import {Link} from 'react-router-dom';

export class Navbar extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className={Classes.main}>
                <div className={Classes.wrapper}>
                    <div className={Classes.logo}>
                        Community Library
                    </div>
                    <div className={Classes.menu}>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar