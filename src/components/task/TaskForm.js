import React, {PropTypes} from 'react';

const TaskForm = ({onSubmit, onChange, form}) => {
	const handleChange = (event) => {
		onChange(event.target.name, event.target.value);
	};
	return (
		<form onSubmit={onSubmit}>
			Name <input type="text" value={form.name} name="name" onChange={handleChange} />
			Type <input type="text" value={form.type} name="type" onChange={handleChange} />
			<input type="submit" />
		</form>
	);
};

TaskForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	form: PropTypes.object.isRequired
};

export default TaskForm;
