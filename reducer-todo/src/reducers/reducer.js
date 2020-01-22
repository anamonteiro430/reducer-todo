export const initialState = {
	todos: [
		{ item: 'Learn about reducers', completed: false, id: 1 },

		{
			item: 'Cry about reducers',
			completed: false,
			id: 2
		},
		{
			item: 'Understand about reducers',
			completed: false,
			id: 3
		}
	]
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{ id: Date.now(), item: action.payload, completed: false }
				]
			};
		case 'REMOVE_TODO':
			console.log('works');
			return {
				/* state.todos.filter(rem => rem === rem.id);
				...state,
				todos: [] */
			};
		default:
			return state;
	}
};
