import React, {PropTypes} from 'react';

const DateInput = (props) => {
	return (
		<input type="date" {...props} />
	);
};

DateInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	hidden: PropTypes.bool,
	onClick: PropTypes.func,
};

export default DateInput;
