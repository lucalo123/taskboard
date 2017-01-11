import React, {PropTypes} from 'react';

const TaskForm = ({onSubmit, onChange, form}) => {
	const handleChange = (event) => {
		onChange(event.target.name, event.target.value);
	};
	return (
		<form onSubmit={onSubmit} className="form-inline">
			<div className="form-group">
				<input type="text" placeholder="Name" className="form-control" value={form.name} name="name" onChange={handleChange} />
			</div>
			<div className="form-group">
				<input type="text" placeholder="Type" className="form-control" value={form.category} name="category" onChange={handleChange} />
			</div>
			<button type="submit" className="btn btn-default">Ok</button>
		</form>
	);
};

TaskForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	form: PropTypes.object.isRequired
};

export default TaskForm;
