import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';

import TaskForm from '../components/task/TaskForm';
import TaskRow from '../components/task/TaskRow';
import Tabs from '../components/common/Tabs';

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
		/* TODO:
		 * 1. Find a better alternative than using tables for displaying a list of tasks.
		 * 2. Get categories from the store.
		 * 3. Figure out if we really want to use tabs for filtering tasks by category.
		 * 		- It might get awkward whenever there's a lot of categories, a vertical solution might be better.
		 * 		- We need to control the active tab state somewhere, if it's gonna be handled inside the Tabs component, we need to change it to a container component.
		*/
		const tabNames = this.props.categories.map(tab => tab.name);
		return (
			<div>
				<h2>Tasks Page</h2>
				<TaskForm form={this.state.form} onSubmit={this.handleSubmit} onChange={this.handleFormChange} />
				<Tabs list={tabNames}/>
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
	categories: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		tasks: state.tasks,
		categories: state.categories
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
