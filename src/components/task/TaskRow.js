import React, { PropTypes, Component } from 'react';

//import Checkbox from '../common/Checkbox';
//import TextInput from '../common/TextInput';

class TaskRow extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			task: Object.assign({}, props.task),
			editMode: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.cancel = this.cancel.bind(this);
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

	handleSubmit(event) {
		event.preventDefault();
		this.toggleEdit();
		this.props.onUpdate(this.state.task);
	}

	toggleEdit() {
		this.setState({ editMode: !this.state.editMode });
	}

	cancel() {
		// Reset task to the initial object, keeping it simple by copying the whole task object, even though, we are currently only interesting in reseting the name property.
		// The completed value is out of harms way since we're updating the store whenever checkbox is being toggled.
		this.setState({task: Object.assign({}, this.props.task), editMode: false});
	}

	render() {
		let {id, completed, name, category} = this.state.task;
		/* TODO:
		* 1. DONE: Fix hidden prop doesn't seem to work when using bootstrap classes.
		*    - Note: there might be a better solution, research why the hidden property is overriden by bootstrap.
		* 2. Inline checkbox, text click should swap text with an input for editing.
		     - Using a condensed table, until I find a better solution.
				 - Alternative to input and text swap, is to always display an input that is styled in a way that it will look like a regular paragraph.
		* 3. DONE: Remove conditional text rendering "Completed, Not Completed".
			4. DONE: When canceling update, value should be restored to previous value.
		*/
		return (
			<tr>
				<td><input type="checkbox" name={name} checked={completed} onChange={this.toggleComplete} /></td>
				<td style={{ width: '390px' }}>
					<form onSubmit={this.handleSubmit} className="form-inline">
						<span hidden={this.state.editMode} onClick={this.toggleEdit}>{name}</span>
						<input type="text" name="name" value={name} onChange={this.handleChange} className={'form-control ' + (!this.state.editMode && 'hidden')} />
						<input type="submit" className={'btn btn-sm btn-success ' + (!this.state.editMode && 'hidden')} value="Ok" />
						<button type="button" hidden={!this.state.editMode} className={'btn btn-sm btn-danger ' + (!this.state.editMode && 'hidden')} onClick={this.cancel}>
							<span className="glyphicon glyphicon-remove" />
						</button>
					</form>
				</td>
				<td>{category}</td>
				<td>
					<div className="pull-right">
						<button type="button" onClick={this.props.onDelete} value={id} className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-trash" /></button>
					</div>
				</td>
			</tr>
		);
	}
}
// label={`${completed ? 'Completed' : 'Not Completed'}`}
//<TextInput name="name" onChange={this.handleChange} onMouseO value={name} hidden={!this.state.editMode} />

TaskRow.propTypes = {
	task: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default TaskRow;
