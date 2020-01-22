import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './reducers/reducer';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='App'>
			<TodoList state={state} dispatch={dispatch} />
		</div>
	);
}

export default App;
