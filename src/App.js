import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)


	const addCash = () => {
		dispatch({ type: "ADD_CASH", payload: 5 })
	}
	const getCash = () => {
		dispatch({ type: "GET_CASH", payload: 5 })
	}

	return (
		<div className="App">
			<div className='wrapper'>
				<div className='content'>
					<div className='content__cash'>{cash}</div>
					<div className='content__plus-minus'>
						<button className='content__add' onClick={() => addCash()}>Пополнить счёт</button>
						<button className='content__get' onClick={() => getCash()}>Убавить счёт</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;











/* 

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash)


	const addCash = (value) => {
		dispatch({ type: "ADD_CASH", payload: value })
	}
	const getCash = (value) => {
		dispatch({ type: "GET_CASH", payload: value })
	}

	return (
		<div className="App">
			<div className='wrapper'>
				<div className='content'>
					<div className='content__cash'>{cash}</div>
					<div className='content__plus-minus'>
						<button className='content__add' onClick={() => addCash(Number(value))}>Пополнить счёт</button>
						<input type='text' className='content__input' value={value} onChange={(event) => setValue(event.target.value)} />
						<button className='content__get' onClick={() => getCash(Number(value))}>Убавить счёт</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

*/