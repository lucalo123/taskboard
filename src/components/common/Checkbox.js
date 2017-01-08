import React, {PropTypes} from 'react';

const Checkbox = ({label, name, checked, onChange}) => {
	return (
		<div>
			<input type="checkbox" name={name} checked={checked} onChange={onChange}/>{label}
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Checkbox;
