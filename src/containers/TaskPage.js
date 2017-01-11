import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';

import TaskForm from '../components/task/TaskForm';
import TaskRow from '../components/task/TaskRow';

class TaskPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			form: {name: '', category: ''}
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleDelete(event) {
		this.props.actions.deleteTask(parseInt(event.target.value));
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.actions.saveTask(this.state.form);
		this.setState({form: {name: '', category: ''}});
	}

	handleUpdate(task) {
		this.props.actions.saveTask(task)
			.then(task => {
				console.log(task, 'Task updated');
			});
	}

	handleFormChange(name, value) {
		const form = this.state.form;
		form[name] = value;
		this.setState({form: form});
	}

	render() {
		const rows = this.props.tasks.map((task, index) => {
			return <TaskRow key={index} onDelete={this.handleDelete} onUpdate={this.handleUpdate} task={task} />;
		});
		// TODO: Find a better alternative than using tables for displaying a list of tasks.
		return (
			<div>
				<h2>Tasks Page</h2>
				<TaskForm form={this.state.form} onSubmit={this.handleSubmit} onChange={this.handleFormChange}/>
				<table className="table table-condensed">
					<thead>
						<tr>
							<th />
							<th>Name</th>
							<th>Category</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
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
