import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ({loading}) => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
									aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<a className="navbar-brand">Taskboard</a>
				</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
							<li><Link to="/tasks" activeClassName="active">Tasks</Link></li>
							<li>{loading && 'Loading...'}</li>
						</ul>
					</div>
				</div>
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
