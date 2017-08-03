import React, {PropTypes} from 'react';
import _isEmpty from 'lodash/isEmpty';

const SelectInput = ({options, name, value, onChange, hidden, allowNone}) => {
  const opts = options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>);
  const showNone = allowNone && _isEmpty(value);
	return (
		<select type="text"
      name={name} value={value}
      onChange={onChange}
      className={'form-control ' + (hidden && 'hidden')}>
      {showNone && <option key={-1} value="">-- None --</option>}
      {opts}
    </select>
	);
};

SelectInput.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
  //value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  allowNone: PropTypes.bool
};

export default SelectInput;
