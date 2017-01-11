import React, {PropTypes, Component} from 'react';

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
	}

	handleChange(event) {
		const field = event.target.name;
		const value = event.target.value;
		const task = this.state.task;
		task[field] = value;
		this.setState({task: task});
	}

	toggleComplete() {
		const task = this.state.task;
		task.completed = !task.completed;
		//this.setState({task: task});
		this.props.onUpdate(this.state.task);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.toggleEdit();
		this.props.onUpdate(this.state.task);
	}

	toggleEdit() {
		this.setState({editMode: !this.state.editMode});
	}

	render() {
		let {id, completed, name, category} = this.state.task;
		/* TODO:
		* 1. Fix: hidden prop doesn't seem to work when using bootstrap classes.
		*    - Done, but maybe there's a better solution.
		* 2. Inline checkbox, text click should swap text with an input for editing.
		     - Using a condensed tables, until I find a better solution.
		* 3. Remove conditional text rendering "Completed, Not Completed".
		    - Done.
			4. When canceling update, value should be restored to previous value.
		*/
		return (
			<tr>
				<td><input type="checkbox" name={name} checked={completed} onChange={this.toggleComplete} /></td>
				<td style={{width:'390px'}}>
					<form onSubmit={this.handleSubmit} className="form-inline">
						<span hidden={this.state.editMode} onClick={this.toggleEdit}>{name}</span>
						<input type="text" name="name" value={name} onChange={this.handleChange} className={'form-control ' + (!this.state.editMode && 'hidden')} />
						<input type="submit" className={'btn btn-sm btn-success ' + (!this.state.editMode && 'hidden')} value="Ok" />
						<button type="button" hidden={!this.state.editMode} className={'btn btn-sm btn-danger ' + (!this.state.editMode && 'hidden')} onClick={this.toggleEdit}>
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
