import TaskList from '../components/task/TaskList';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';

class TaskPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Tasks Page</h2>
        <TaskList items={this.props.tasks} />
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
