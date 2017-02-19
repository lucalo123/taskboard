import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

import EditableInput from '../common/form/EditableInput';
import DeleteButton from '../common/DeleteButton';

class CategoryRow extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      category: _.clone(props.category)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    // TODO
  }

  toggleEdit() {
    this.setState({ editMode: !this.state.editMode });
    // Put focus on input if we changed editMode to true.
    if (!this.state.editMode) {
      setTimeout(() => { this.textInput.focus(); }, 0);
    }
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const category = this.state.category;
    category[field] = value;
    this.setState({ category: category });
  }

  render() {
    let {id, name} = this.state.category;
    return (
      <tr>
        <td>
          <EditableInput name="name" value={name} onUpdate={() => {this.props.onUpdate(this.state.category);}} onChange={this.handleChange} />
        </td>
        <td>
          <DeleteButton onDelete={() => {this.props.onDelete(id);}} />
        </td>
      </tr>
    );
  }
}

CategoryRow.propTypes = {
  category: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default CategoryRow;
