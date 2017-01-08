import React, {PropTypes} from 'react';

const TextInput = ({name, onChange, value}) => {
	return (
		<input type="text"
					 name={name}
					 value={value}
					 onChange={onChange}
		/>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	//label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default TextInput;
