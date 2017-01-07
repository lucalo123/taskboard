import React, {PropTypes} from 'react';

import Checkbox from '../common/Checkbox';

const TaskList = ({items, onChange, onDeleteClick}) => {
  let list = items.map((item, index) => {
		return (
			<div key={index}>
				<Checkbox key={index} value={index} onChange={onChange} checked={item.completed} label={item.name + ' ' + item.type} />
				<button type="button" onClick={onDeleteClick} value={index}>Delete</button>
			</div>
		);
  });
  return (
    <div>
      {list}
    </div>
  );
};

TaskList.propTypes = {
	items: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default TaskList;
