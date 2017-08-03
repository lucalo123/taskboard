import React, { PropTypes, Component } from 'react';
import DateTime from 'react-datetime';
import moment from 'moment';
import _ from 'lodash';

class EditableDate extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			editMode: false
		};

		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleBlur(date) {
		//console.log('Date', date.format());
		if(!date) {
			return;
		}
		this.setState({ value: date, editMode: false });
		if(_.isFunction(this.props.onChange)) {
			this.props.onChange(date);
		}
		if (!date.isSame(this.props.value)) {
			this.props.onUpdate();
		}
	}

	toggleEdit() {
		this.setState({ editMode: !this.state.editMode });
		// Put focus on input if we changed editMode to true.
		if (!this.state.editMode) {
			setTimeout(() => { this.dateInput.openCalendar(); }, 0);
		}
	}

	render() {
		// TODO: remove the hard coded "width" style property.
		return (
			<div className="form-inline" style={{ width: '190px' }}>
				<span hidden={this.state.editMode} onDoubleClick={this.toggleEdit}>{moment(this.props.value, 'YYYYMMDD').fromNow()}</span>
				<DateTime className={!this.state.editMode && 'hidden'}
									ref={(input) => {this.dateInput = input;}}
									defaultValue={this.props.value}
									onBlur={date => {this.handleBlur(date);}} />
			</div>
		);
	}
}

EditableDate.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.instanceOf(moment).isRequired,
	onUpdate: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

export default EditableDate;
