import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>useReducer Examples - Alternative to Redux</h1>
				<Counter></Counter>
			</header>
		</div>
	);
}

export default App;

