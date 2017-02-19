import React, {PropTypes} from 'react';

const SelectInput = ({options, name, value, onChange}) => {
  const opts = options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>);
	return (
		<select type="text" name={name} value={value} onChange={onChange} className="form-control" >
      <option value="">-- None --</option>
      {opts}
    </select>
	);
};

SelectInput.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;
