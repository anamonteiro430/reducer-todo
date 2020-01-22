import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './../reducers/reducer';
import { Todo } from './Todo';

export const TodoList = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [todo, setTodo] = useState('');
	const handleChanges = e => {
		setTodo(e.target.value);
	};
	const removetodo = id => {
		dispatch({ type: 'REMOVE_TODO', payload: id });
	};
	return (
		<div>
			<h1>
				<input type='text' value={todo} name={todo} onChange={handleChanges} />

				<button onClick={() => dispatch({ type: 'ADD_TODO', payload: todo })}>
					ADD
				</button>
				{state.todos.map(todo => (
					<Todo
						item={todo}
						dispatch={props.dispatch}
						id={todo.id}
						removetodo={removetodo}
					/>
				))}
			</h1>
		</div>
	);
};
