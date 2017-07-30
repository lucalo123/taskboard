import React, { PropTypes, Component } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div>
        <Header loading={this.props.loading} />
				<div className="container" style={{marginTop: '50px'}}>
        {this.props.children}
				</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

export default connect(mapStateToProps)(App);
