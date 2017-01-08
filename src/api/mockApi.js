import mockData from './mockData';

class MockApi {
	constructor() {
		this.tasks = [];
	}

	getTasks() {
		const self = this;
		return new Promise((resolve) => {
			if (self.tasks.length === 0) {
				self.tasks = mockData.tasks;
			}
			resolve(self.tasks);
		});
	}

	setTasks(tasks) {
		this.tasks = tasks;
	}

	createTask(task) {
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

		return new Promise((resolve) => {
			resolve(newTask);
		});
	}

	updateTask(task) {
		const self = this;
		const updatedTask = Object.assign({}, task);
		return new Promise((resolve) => {
			self.tasks = self.tasks.map(item => {
				if(item.id === task.id) {
					return updatedTask;
				}
				return item;
			});
			resolve(updatedTask);
		});
	}

	deleteTask(id) {
		const self = this;

		return new Promise(resolve => {
			self.tasks = self.tasks.slice(id);
			resolve(true /* Success indicator */);
		});
	}
}

export default MockApi;
