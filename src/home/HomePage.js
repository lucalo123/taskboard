import React, { PropTypes, Component } from 'react';
import Panel from '../common/Panel';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../widget/widgetActions';

import DateInput from '../common/form/DateInput';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dragTargetIndex: -1,
      dragSourceIndex: -1
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragStart(event) {
    if(event.target.id != '') {
      this.setState({dragSourceIndex: +event.target.id});
    }
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.setData('text/uri-list', 'http://localhost:3000/tasks/' + event.target.id);
    event.dataTransfer.dropEffect = 'move';
  }

  handleDrop(event) {
    event.stopPropagation();
    //console.log('Drop', event.dataTransfer.getData('text/plain'));
    return false;
  }

  handleDragOver(event) {
    if(event.preventDefault) {
      event.preventDefault();
    }

    
    if(event.target.id != '') {
      this.setState({dragTargetIndex: +event.target.id});
    }

    event.dataTransfer.dropEffect = 'copy';

    return false;
  }

  handleDragLeave(event) {
    //console.log('Drag leave');
  }

  handleDragEnd() {
    const from = this.state.dragSourceIndex;
    const to = this.state.dragTargetIndex;
    // Change order if something has changed.
    if(from > -1 && to > -1 && from !== to) {
      console.log('Change order', 'From: ' + from, 'To: ' + to);
      this.props.actions.changeOrder(from, to);
    }

    this.setState({dragTargetIndex: -1, dragSourceIndex: -1});
  }

  move(list, from, to) {
    return list.splice(to, 0, list.splice(from, 1)[0]);
  }

  findWhere(list, id) {
    return list.filter(item => item.id === id)[0];
  }

  render() {
    return (
      <div>
        <h2>Taskboard</h2>
        <br />
        <div className="row">
          {this.props.widgets.map((widget) => 
            <div key={widget.order} 
              id={widget.order}
              className={'col-md-6' + (widget.order == this.state.dragTargetIndex ? ' drag-over' : '')}
              draggable="true" 
              onDragStart={this.handleDragStart} 
              onDrop={this.handleDrop} 
              onDragOver={this.handleDragOver}
              onDragLeave={this.handleDragLeave}
              onDragEnd={this.handleDragEnd}
              >
              <Panel title={widget.name}>{widget.description}</Panel>
            </div>
            )}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    widgets: state.widgets
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
