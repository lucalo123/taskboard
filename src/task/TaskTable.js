import React, { PropTypes } from 'react';

import TaskRow from './TaskRow';

const TaskTable = ({tasks, onDelete, onUpdate, categories}) => {
  const rows = tasks
									.map(
										(task, index) =>
											<TaskRow key={index} onDelete={onDelete(task.id)} onUpdate={onUpdate} task={task} categories={categories} />
                    );
  return (
			<table className="table table-condensed">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Category</th>
            <th>Start time</th>
            <th>End time</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
		);
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default TaskTable;
