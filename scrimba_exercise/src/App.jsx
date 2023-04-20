import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Card from './components/Card';
import experience from './assets/image 12.png';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<Card
				img={experience}
				rating="5.0"
				reviewCount={6}
				country="USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/>
		</div>
	);
}

export default App;
