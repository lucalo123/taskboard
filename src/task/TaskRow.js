import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

import EditableText from '../common/form/EditableText';
import EditableSelect from '../common/form/EditableSelect';
import DeleteButton from '../common/DeleteButton';

class TaskRow extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			task: Object.assign({}, props.task)
		};

		this.handleChange = this.handleChange.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(this.state.task.id !== nextProps.task.id) {
			this.setState({task: _.clone(nextProps.task)});
		}
	}

	handleBlur() {
		if(!_.isEqual(this.props.task, this.state.task)) {
			this.props.onUpdate(this.state.task);
		}
		this.setState({editMode: false});
	}

	handleChange(event) {
		const field = event.target.name;
		const value = event.target.value;
		const task = this.state.task;
		task[field] = value;
		this.setState({ task: task });
	}

	toggleComplete() {
		// Update the store whenever the checkbox is being toggled.
		const task = this.state.task;
		task.completed = !task.completed;
		this.props.onUpdate(this.state.task);
	}

	toggleEdit() {
		this.setState({ editMode: !this.state.editMode });
		// Put focus on input if we changed editMode to true.
		if(!this.state.editMode) {
			setTimeout(() => {this.textInput.focus();}, 0);
		}
	}

	render() {
		/* TODO:
		 1. DONE: Fix hidden prop doesn't seem to work when using bootstrap classes.
			- Note: there might be a better solution, research why the hidden property is overriden by bootstrap.
		 2. TEMPORARILY FIXED: Inline checkbox, text click should swap text with an input for editing.
		  - Using a condensed table until I find a better solution.
			*	- An alternative to input and text swap, is to always display an input that is styled in a way that it will look like a regular paragraph.
		 3. DONE: Remove conditional text rendering "Completed, Not Completed".
		 4. DONE: When canceling update, value should be restored to previous value.
		 5. Enable update of category. 
		 
		*/
		let {id, completed, name, category, starts_at, ends_at} = this.state.task;
		const categoryOptions = this.props.categories.map((cat) => { return {name: cat.name, value: cat.name};});
		//console.log('RENDERING ROW ' + name);
		return (
			<tr>
				<td><input type="checkbox" name={name} checked={completed} onChange={this.toggleComplete} /></td>
				<td>
					<EditableText name="name" value={name} onUpdate={() => {this.props.onUpdate(this.state.task);}} onChange={this.handleChange} />
				</td>
				<td>
					<EditableSelect name="category" value={category || 'N/A'} onUpdate={() => {this.props.onUpdate(this.state.task);}} onChange={this.handleChange} options={categoryOptions} />
				</td>
				<td>
					{starts_at}
				</td>
				<td>
					{ends_at}
				</td>
				<td>
					<DeleteButton onDelete={() => {this.props.onDelete(id);}} />
				</td>
			</tr>
		);
	}
}

TaskRow.propTypes = {
	task: PropTypes.object.isRequired,
	categories: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default TaskRow;
