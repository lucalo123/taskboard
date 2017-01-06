import mockData from './mockData';

class MockApi {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    if(this.tasks.length > 0) {
    	return this.tasks;
		}
		this.tasks = mockData.tasks;
    return new Promise((resolve, reject) => {
      resolve(mockData.tasks);
    });
  };

  createTask(task) {
		const newTask = {
			id: this.tasks.length,
			name: task.name,
			type: task.type,
			completed: false
		};
		this.tasks.push(newTask);

    return new Promise((resolve, reject) => {
			resolve(newTask);
		});
  }

  updateTask(task) {
		this.tasks[task.id] = task;
		return new Promise((resolve, reject) => {
			resolve(task);
		});
	}
}

export default MockApi;
