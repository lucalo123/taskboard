import React, {PropTypes} from 'react';

import TaskRow from './TaskRow';

const TaskList = (({tasks, onUpdate, onDelete}) => {

	const rows = tasks.map((task, index) => {
		return <TaskRow key={index} onDelete={onDelete} onUpdate={onUpdate} task={task} />;
	});
	return (
		<div>
			List of tasks
			{rows}
		</div>
	);
});

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default TaskList;
