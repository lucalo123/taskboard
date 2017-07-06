import React, { PropTypes } from 'react';

const AddButton = ({onClick}) => {
  return (
      <button type="submit" style={{height: '34px', padding: '6px 12px'}} onClick={onClick} className="btn btn-sm btn-success"><span className="glyphicon glyphicon-plus" /></button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func
};

export default AddButton;