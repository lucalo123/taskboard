import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const TaskForm = ({onSubmit, onChange, form, categories}) => {
	const handleChange = (event) => {
		onChange(event.target.name, event.target.value);
	};
	return (
		<form onSubmit={onSubmit} className="form-inline">
			<div className="form-group">
				<input type="text" placeholder="Name" className="form-control" value={form.name} name="name" onChange={handleChange} />
			</div>
			<SelectInput options={categories} value={form.category} onChange={handleChange} name="category" />
			<button type="submit" className="btn btn-default">Ok</button>
		</form>
	);
};

TaskForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	form: PropTypes.object.isRequired,
	categories: PropTypes.array.isRequired
};

export default TaskForm;
