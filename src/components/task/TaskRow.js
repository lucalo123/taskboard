import React, {PropTypes, Component} from 'react';

import Checkbox from '../common/Checkbox';
import TextInput from '../common/TextInput';

class TaskRow extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			task: Object.assign({}, props.task)
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
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

	render() {
		let {id, completed, name, category} = this.state.task;
		return (
				<form onSubmit={this.handleSubmit}>
					<br />
					<Checkbox name="completed" checked={completed} onChange={this.toggleComplete} label={`${name} | ${category} | ${completed ? 'Completed' : 'Not Completed'}`} />
					<TextInput name="name" onChange={this.handleChange} value={name} />
					<button type="button" onClick={this.props.onDelete} value={id}>Delete</button>
					<input type="submit" value="Save" />
				</form>
			);
		}
}

TaskRow.propTypes = {
	task: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default TaskRow;
