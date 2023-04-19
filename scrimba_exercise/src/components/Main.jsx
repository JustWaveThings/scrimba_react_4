import hero from '../assets/Group 77.png';

function Main() {
	return (
		<div className="main">
			<img
				src={hero}
				className="App-hero"
				alt="logo"
			/>
			<h1>Online Experiences</h1>
			<p>
				Join unique interactive activities led by one-of-a-kind hosts--all
				without leaving home.
			</p>
		</div>
	);
}

export default Main;
