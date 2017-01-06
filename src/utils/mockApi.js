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

	createTask(task) {
		const newTask = {
			id: this.tasks.length,
			name: task.name,
			type: task.type,
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
		this.tasks[task.id] = Object.assign({}, task);
		return new Promise((resolve) => {
			resolve(this.tasks[task.id]);
		});
	}
}

export default MockApi;
