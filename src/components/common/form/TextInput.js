import React, {PropTypes} from 'react';

const TextInput = ({name, onChange, value, hidden, onClick}) => {
	return (
		<input type="text" name={name} value={value} onChange={onChange} hidden={hidden} onClick={onClick} />
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	//label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	hidden: PropTypes.bool,
	onClick: PropTypes.func,
};

export default TextInput;
