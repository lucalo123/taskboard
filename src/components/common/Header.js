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
					<IndexLink to="/" className="navbar-brand" activeClassName="active">Taskboard</IndexLink>
				</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
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
