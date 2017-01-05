class MockApi {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    const self = this;
    return new Promise((resolve, reject) => {
      // self.tasks = [
      //   {
      //     id: 0,
      //     name: 'Task #1',
      //     type: 'Daily chore',
      //     completed: false
      //   },
      //   {
      //     id: 1,
      //     name: 'Task #2',
      //     type: 'House chore',
      //     completed: true
      //   }
      // ];
      self.tasks = require('./mockData.json');
      resolve(self.tasks);
    });
  };

  saveTask(task) {
    const self = this;
    const prom = new Promise((resolve, reject) => {
      if(task.id != null) {
        self.tasks[task.id] = task;
        resolve(task);
      } else {
        const newTask = {
          id: self.tasks.length,
          name: task.name,
          type: task.type,
          completed: false
        };
        self.tasks.push(newTask);
        resolve(newTask);
      }

    });

    return prom;
  }

};

export default MockApi;
