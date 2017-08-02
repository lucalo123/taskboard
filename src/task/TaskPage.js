import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './taskActions';

import _clone from 'lodash/clone';

import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
//import Tabs from '../common/Tabs';

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
		this.handleCategoryClick = this.handleCategoryClick.bind(this);
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

	visibleRows() {
		if(this.state.activeCategory === -1) {
			return this.props.tasks;
		}
		return this.getTasksByCategory(this.state.activeCategory);
  }

  getTasksByCategory(categoryId) {
		return this.props.tasks.filter(task => task.category_id === categoryId);
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

	handleCategoryClick(id) {
		return () => {
			this.setActiveCategory(id);
		};
	}

	setActiveCategory(id) {
		this.setState({activeCategory: id});
	}

	listItem(id, name, count) {
		return (
		<span key={id} onClick={this.handleCategoryClick(id)}>
			<a className={'list-group-item' + (this.state.activeCategory === id ? ' active' : '')}>
				{name}
				<span className="badge">{count}</span>
				</a>
		</span>);
	}

	render() {
		//console.log(this.props.tasks);
		
		/* TODO:
		 * 1. Find a better alternative than tables for displaying a list of tasks.
		 * 2. Get categories from the store.
		 * 3. Figure out if we really want to use tabs for filtering tasks by category.
		 * 		- It might get awkward whenever there's a lot of categories, a vertical solution might be better.
		 * 		- We need to control the active tab state somewhere, if it's gonna be handled inside the Tabs component, we need to change it to a container component.
		 * 4. Issue: When filtering by Category, child components (TaskRow) are not updated properly, it always displays first item for some reason.
		 * 		- Solved: The issue was that TaskRow has its own state and the state never got told to refresh, solved by adding componentWillReceiveProps.
		 * <div className="list-group">
					<a href="#" className="list-group-item active">Active<span className="badge">10</span></a>
					<a href="#" className="list-group-item">Other<span className="badge">11</span></a>
				</div>
		*/
		//const tabList = this.props.categories.map(tab => tab.name);
		// <Tabs list={this.props.categories} activeId={this.state.activeCategory} onTabClick={this.handleCategoryClick} />
		let listGroup = [this.listItem(-1, 'All', this.props.tasks.length)];
		this.props.categories.forEach(item => {
			listGroup.push(this.listItem(item.id, item.name, this.getTasksByCategory(item.id).length));
		});
		
		return (
			<div>
				<h2>Task page</h2>
				<br />
				<TaskForm form={this.state.form} onSubmit={this.handleSubmit} onChange={this.handleFormChange} categories={this.props.categories} />
				<hr />
				<div className="row">
					<div className="col-xs-3">
						<div className="list-group" style={{'marginTop': '10px'}}>
							{listGroup}
						</div>
					</div>
					<div className="col-xs-9">
						<TaskTable tasks={this.visibleRows()} onDelete={this.handleDelete} onUpdate={this.handleUpdate} categories={this.props.categories} />
					</div>
				</div>
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
