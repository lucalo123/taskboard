import TaskList from '../components/task/TaskList';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';
import TaskForm from '../components/task/TaskForm';


class TaskPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {name: '', type: ''}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		//console.log(`Checkbox changed value: ${event.target.value}`);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.actions.saveTask(this.state.form);
		this.setState({form: {name: '', type: ''}});
	}

	handleFormChange(name, value) {
		const form = this.state.form;
		form[name] = value;
		this.setState({form: form});
	}

	render() {
		return (
			<div>
				<h2>Tasks Page</h2>
				<TaskForm form={this.state.form} onSubmit={this.handleSubmit} onChange={this.handleFormChange}/>
				<TaskList items={this.props.tasks} onChange={this.handleChange}/>
			</div>
		);
	}

}

TaskPage.propTypes = {
	tasks: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		tasks: state.tasks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskPage);
