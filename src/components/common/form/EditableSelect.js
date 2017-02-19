import React, { PropTypes, Component } from 'react';
import _isEqual from 'lodash/isEqual';

class EditableSelect extends Component {

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
			setTimeout(() => { this.selectInput.focus(); }, 0);
		}
	}

	render() {
		const opts = this.props.options.map((option, index) => {
			return <option key={index} value={option.value}>{option.name}</option>;
		});
		return (
			<div className="form-inline" style={{ width: '390px' }}>
				<span hidden={this.state.editMode} onDoubleClick={this.toggleEdit}>{this.props.value}</span>
					<select type="text"
						name={this.props.name} value={this.props.value}
						onChange={this.props.onChange}
						onBlur={this.handleBlur}
						ref={input => {this.selectInput = input;}}
						className={'form-control ' + (!this.state.editMode && 'hidden')}>
						{this.props.value == null && <option value="">-- None --</option>}
						{opts}
					</select>
			</div>
		);
	}
}

EditableSelect.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	options: PropTypes.array,
	onUpdate: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

export default EditableSelect;
