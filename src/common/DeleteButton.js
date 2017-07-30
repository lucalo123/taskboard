import React, { PropTypes } from 'react';

const DeleteButton = ({onDelete}) => {
  return (
    <div className="pull-right">
      <button type="button" onClick={onDelete} className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-trash" /></button>
    </div>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export default DeleteButton;