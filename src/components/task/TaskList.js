import React from 'react';

const TaskList = ({items}) => {
  let list = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <ul>
      {list}
    </ul>
  );
};

export default TaskList;
