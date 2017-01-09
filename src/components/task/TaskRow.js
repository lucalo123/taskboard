import React, {PropTypes, Component} from 'react';

import Checkbox from '../common/Checkbox';
import TextInput from '../common/TextInput';

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
		this.props.onUpdate(this.state.task);
	}

	toggleEdit() {
		this.setState({editMode: !this.state.editMode});
	}

	render() {
		let {id, completed, name, category} = this.state.task;
		return (
				<form onSubmit={this.handleSubmit}>
					<br />
					<Checkbox name="completed" checked={completed} onChange={this.toggleComplete} label={`${completed ? 'Completed' : 'Not Completed'}`} />
					<div onClick={this.toggleEdit} hidden={this.state.editMode} className="task-row-name">{name} - {category}</div>
					<input type="text" name="name" value={name} onChange={this.handleChange} hidden={!this.state.editMode} className="task-row" />
					<button type="button" onClick={this.props.onDelete} value={id}>Delete</button>
					<input type="submit" value="Save" hidden={!this.state.editMode} />
					<button type="button" hidden={!this.state.editMode} onClick={this.toggleEdit}>x</button>
				</form>
			);
		}
}
//<TextInput name="name" onChange={this.handleChange} onMouseO value={name} hidden={!this.state.editMode} />

TaskRow.propTypes = {
	task: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default TaskRow;
