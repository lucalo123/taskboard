import React, {PropTypes} from 'react';

const SelectInput = ({options, name, value, onChange, hidden}) => {
  const opts = options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>);
	return (
		<select type="text"
      name={name} value={value}
      onChange={onChange}
      className={'form-control ' + (hidden && 'hidden')}>
      <option value="">-- None --</option>
      {opts}
    </select>
	);
};

SelectInput.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;
