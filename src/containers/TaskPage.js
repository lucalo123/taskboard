import TaskList from '../components/task/TaskList';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';

class TaskPage extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
		console.log(`Checkbox changed value: ${event.target.value}`);
	}

  render() {
    return (
      <div>
        <h2>Tasks Page</h2>
        <TaskList items={this.props.tasks} onChange={this.handleChange} />
      </div>
    );
  }

}

TaskPage.propTypes = {
  tasks: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPage);
