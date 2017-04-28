export default {
	tasks: [
		{ id: 1, name: 'Prepare rod', starts_at: '2017-03-02 09:00', ends_at: '2017-01-26 15:00', completed: false, category_id: 1, category: 'Fishing' },
    { id: 2, name: 'Research on Winnie the pooh', starts_at: '2016-01-01 08:00', ends_at: '2016-01-01 14:00', completed: true, category_id: 2, category: 'Learning' },
    { id: 3, name: 'Take a ride on my bike', starts_at: '2017-04-01 08:00', ends_at: '2017-04-01 09:00', completed: false, category_id: 3, category: 'Excercise' }
	],
	categories: [
		{ id: 1, name: 'Fishing' },
		{ id: 2, name: 'Learning' },
		{ id: 3, name: 'Exercise' }
	]
};
