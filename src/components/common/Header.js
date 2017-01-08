import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ({loading}) => {
	return (
		<nav className="tb-header">
			<ul>
				<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/tasks" activeClassName="active">Tasks</Link></li>
				<li>{loading && 'Loading...'}</li>
			</ul>
		</nav>
	);
}

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
