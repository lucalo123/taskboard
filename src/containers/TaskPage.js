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
			form: {name: '', category: ''},
			activeCategory: -1,
			visibleTasks: []
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleTabClick = this.handleTabClick.bind(this);
	}

	handleDelete(id) {
		return () => {
			this.props.actions.deleteTask(parseInt(id));
		};
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

	handleTabClick(id) {
		this.setState({activeCategory: id});
	}

	render() {
		const rows = this.props.tasks.map((task, index) => {
			// If active category is All (-1), or task's categoryId matches active category display task.
			if(this.state.activeCategory === -1 || this.state.activeCategory === task.categoryId) {
				return <TaskRow key={index} onDelete={this.handleDelete(task.id)} onUpdate={this.handleUpdate} task={task} />;
			}
		});
		/* TODO:
		 * 1. Find a better alternative than using tables for displaying a list of tasks.
		 * 2. Get categories from the store.
		 * 3. Figure out if we really want to use tabs for filtering tasks by category.
		 * 		- It might get awkward whenever there's a lot of categories, a vertical solution might be better.
		 * 		- We need to control the active tab state somewhere, if it's gonna be handled inside the Tabs component, we need to change it to a container component.
		*/
		//const tabList = this.props.categories.map(tab => tab.name);
		return (
			<div>
				<h2>Tasks</h2>
				<TaskForm form={this.state.form} onSubmit={this.handleSubmit} onChange={this.handleFormChange} categories={this.props.categories} />
				<Tabs list={this.props.categories} activeId={this.state.activeCategory} onTabClick={this.handleTabClick} />
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
