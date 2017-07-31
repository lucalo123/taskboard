import React, { PropTypes, Component } from 'react';
import _isEqual from 'lodash/isEqual';

class EditableText extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			value: props.value,
			editMode: false
		};

		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleBlur() {
		if (!_isEqual(this.props.value, this.state.value)) {
			this.props.onUpdate(this.state.value);
		}
		this.setState({ editMode: false });
	}

	toggleEdit() {
		this.setState({ editMode: !this.state.editMode });
		// Put focus on input if we changed editMode to true.
		if (!this.state.editMode) {
			setTimeout(() => { this.textInput.focus(); }, 0);
		}
	}

	render() {
		// TODO: remove the hard coded "width" style property.
		return (
			<div className="form-inline" style={{ width: '190px' }}>
				<span hidden={this.state.editMode} onDoubleClick={this.toggleEdit}>{this.props.value}</span>
				<input type="text" name={this.props.name} value={this.props.value}
					ref={input => { this.textInput = input; }}
					onBlur={this.handleBlur}
					onChange={this.props.onChange}
					className={'form-control ' + (!this.state.editMode && 'hidden')} />
			</div>
		);
	}
}

EditableText.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onUpdate: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

export default EditableText;
