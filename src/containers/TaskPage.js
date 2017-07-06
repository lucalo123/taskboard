import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';

import _clone from 'lodash/clone';

import TaskForm from '../components/task/TaskForm';
import TaskRow from '../components/task/TaskRow';
import Tabs from '../components/common/Tabs';

class TaskPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			form: {name: '', category: '', error: null},
			activeCategory: -1,
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleTabClick = this.handleTabClick.bind(this);
		this.getCategoryId = this.getCategoryId.bind(this);
	}

	getCategoryId(value) {
		let cats = this.props.categories;
		for(let i = 0; i < cats.length; i++) {
			if(cats[i].name === value) {
				return cats[i].id;
			}
		}
		return -1;
	}

	handleDelete(id) {
		return () => {
			this.props.actions.deleteTask(+id);
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		let form = _clone(this.state.form);
		if(this.state.form.name.length <= 3) {
			form.error = 'Task name must be at least 3 characters long.';
			this.setState({form: form});
		} else {
			form.category_id = this.getCategoryId(this.state.form.category);
			this.props.actions.saveTask(form);
			this.setState({form: {name: '', category: '', error: ''}});
		}
	}

	handleUpdate(task) {
		let t = _clone(task);
		t.category_id = this.getCategoryId(task.category);
		this.props.actions.saveTask(t)
			.then(task => {
				console.log('Task updated', task);
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

	visibleRows() {
		if(this.state.activeCategory === -1) {
			return this.props.tasks;
		}
		return this.props.tasks.filter(task => task.category_id === this.state.activeCategory);
	}

	render() {
		//console.log(this.props.tasks);
		const rows = this.visibleRows()
									.map((task, index) => <TaskRow key={index} onDelete={this.handleDelete(task.id)} onUpdate={this.handleUpdate} task={task} categories={this.props.categories} />);
		/* TODO:
		 * 1. Find a better alternative than tables for displaying a list of tasks.
		 * 2. Get categories from the store.
		 * 3. Figure out if we really want to use tabs for filtering tasks by category.
		 * 		- It might get awkward whenever there's a lot of categories, a vertical solution might be better.
		 * 		- We need to control the active tab state somewhere, if it's gonna be handled inside the Tabs component, we need to change it to a container component.
		 * 4. Issue: When filtering by Category, child components (TaskRow) are not updated properly, it always displays first item for some reason.
		 * 		- Solved: The issue was that TaskRow has its own state and the state never got told to refresh, solved by adding componentWillReceiveProps.
		*/
		//const tabList = this.props.categories.map(tab => tab.name);

		return (
			<div>
				<h2>Task page</h2>

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

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
		categories: state.categories
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskPage);
