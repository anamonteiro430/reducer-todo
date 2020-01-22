import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './../reducers/reducer';
import './../styles.css';

export const Todo = props => {
	return (
		<div className='todo'>
			<p>{props.id}</p>
			<h4>{props.item.item}</h4>
			<button onClick={props.removetodo}>X</button>
		</div>
	);
};
