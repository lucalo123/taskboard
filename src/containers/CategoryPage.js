import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryActions';
import _clone from 'lodash/clone';

import CategoryRow from '../components/category/CategoryRow';
import CategoryForm from '../components/category/CategoryForm';

class CategoryPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			form: { name: '', error: null },
		};

		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	handleDelete(id) {
		this.props.actions.deleteCategory(+id);
	}

	handleUpdate(category) {
		this.props.actions.saveCategory(category)
			.then(category => {
				console.log('Category updated', category);
			});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.form.name.length <= 3) {
			let form = _clone(this.state.form);
			form.error = 'Category name must be at least 3 characters long.';
			this.setState({ form: form });
		} else {
			this.props.actions.saveCategory(this.state.form);
			this.setState({ form: { name: '', category: '', error: '' } });
		}
	}

	handleFormChange(name, value) {
		const form = this.state.form;
		form[name] = value;
		this.setState({form: form});
	}

	render() {
		const rows = this.props.categories.map((cat, index) => {
			return <CategoryRow key={index} category={cat} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />;
		});

		return (
			<div>
				<h2>Category page</h2>
				<CategoryForm form={this.state.form} onSubmit={this.handleSubmit} onChange={this.handleFormChange} />
				<table className="table table-condensed">
					<thead>
						<tr>
							<th>Name</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}

}

CategoryPage.propTypes = {
	categories: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		categories: state.categories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(categoryActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
