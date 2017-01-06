import React from 'react';

import Checkbox from '../common/Checkbox';

const TaskList = ({items, onChange}) => {
  let list = items.map((item, index) => {
		return <Checkbox key={index} value={index} onChange={onChange} checked={item.completed} label={item.name + ' ' + item.type} />;
  });
  return (
    <div>
      {list}
    </div>
  );
};

export default TaskList;
