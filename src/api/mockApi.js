import mockData from './mockData';

const DELAY = 20;

class MockApi {
	constructor() {
		this.tasks = [];
		this.categories = [];
	}

	getCategories() {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (this.categories.length === 0) {
					this.categories = mockData.categories;
				}
				resolve(this.categories);
			}, DELAY);
		});
	}

	getTasks() {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (this.tasks.length === 0) {
					this.tasks = mockData.tasks;
				}
				resolve(this.tasks);
			}, DELAY);
		});
	}

	setTasks(tasks) {
		this.tasks = tasks;
	}

	createTask(task) {
		return new Promise((resolve, reject) => {
			if(task.name.length < 3) {
				reject('Name of task must be at least 3 characters long.');
			}
			const newTask = {
				id: this.tasks.length,
				name: task.name,
				category: task.category,
				completed: false
			};
			this.tasks = [
				...this.tasks,
				Object.assign({}, newTask)
			];
			resolve(newTask);
		});
	}

	updateTask(task) {
		const updatedTask = Object.assign({}, task);
		return new Promise((resolve) => {
			this.tasks = this.tasks.map(item => {
				if (item.id === task.id) {
					return updatedTask;
				}
				return item;
			});
			resolve(updatedTask);
		});
	}

	deleteTask(id) {
		return new Promise(resolve => {
			this.tasks = this.tasks.slice(id);
			resolve('Task deleted.');
		});
	}
}

export default MockApi;
