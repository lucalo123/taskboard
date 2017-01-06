import React, {PropTypes} from 'react';

const Checkbox = ({label, value, checked, onChange}) => {
	return (
		<div>
			<input type="checkbox" value={value} checked={checked} onChange={onChange}/>{label}
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Checkbox;
