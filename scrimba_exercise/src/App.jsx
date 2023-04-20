import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Card from './components/Card';

import data from './data';

function App() {
	const cardData = data.map((element, index) => {
		return (
			<Card
				key={index}
				img={element.coverImg}
				rating={element.stats.rating}
				reviewCount={element.stats.reviewCount}
				country={element.location}
				title={element.title}
				price={element.price}
			/>
		);
	});
	return (
		<div className="App">
			<Navbar />
			<Main />
			{cardData}
		</div>
	);
}

export default App;
