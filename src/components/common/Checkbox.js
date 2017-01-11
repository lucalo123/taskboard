import React, {PropTypes} from 'react';

const Checkbox = ({label, name, checked, onChange}) => {
	return (
		<div className="checkbox">
			<label>
				<input type="checkbox" name={name} checked={checked} onChange={onChange} />
				{label}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Checkbox;
