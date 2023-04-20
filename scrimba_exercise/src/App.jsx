import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Card from './components/Card';

import data from './data';

function App() {
	const cardData = data.map((item, index) => {
		return (
			<Card
				key={index}
				item={item}
			/>
		);
	});
	return (
		<div className="App">
			<Navbar />
			<Main />
			<section className="cards-list">{cardData}</section>
		</div>
	);
}

export default App;
