import React, { PropTypes, Component } from 'react';
import Panel from '../common/Panel';
import { connect } from 'react-redux';

import DateInput from '../common/form/DateInput';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const activeTasks = this.props.tasks.filter(task => !task.completed);
    return (
      <div>
        <h2>Active tasks</h2>
        <br />
        <div className="row">
          {activeTasks.map(task => <div key={task.id} className="col-md-6"><Panel title={task.name}>{task.name} - {task.category || 'Uncategorized'}</Panel></div>)}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}


export default connect(mapStateToProps)(HomePage);
