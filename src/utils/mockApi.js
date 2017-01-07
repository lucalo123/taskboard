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
		const self = this;
		return new Promise((resolve) => {
			self.tasks[task.id] = Object.assign({}, task);
			resolve(self.tasks[task.id]);
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
