import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

import TaskRow from './TaskRow';

class TaskTable extends Component {

	constructor(props, context) {
		super(props, context);

    this.state = {};
    
  }
  
	render() {
    const rows = this.props.tasks
									.map(
										(task, index) =>
											<TaskRow key={index} onDelete={this.props.onDelete(task.id)} onUpdate={this.props.onUpdate} task={task} categories={this.props.categories} />
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
	}
}

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default TaskTable;
