import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<nav className="tb-header">
				<ul>
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/tasks" activeClassName="active">Tasks</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Header;
