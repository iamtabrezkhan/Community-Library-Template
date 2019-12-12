import React, { Fragment } from "react";
import Classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<div className={Classes.menu}>
			<ul>
				<li>
					<a onClick={logout} href="#!">
						<i className="fa fa-sign-out-alt"></i>
						Logout
					</a>
				</li>
			</ul>
		</div>
	);
	const guestLinks = (
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
	);
	return (
		<div className={Classes.main}>
			<div className={Classes.wrapper}>
				<div className={Classes.logo}>
					<Link to="/">Community Library Test</Link>
				</div>
				{!loading && (
					<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
				)}
				{/* <div className={Classes.menu}>
					<ul>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</ul>
				</div> */}
			</div>
		</div>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
