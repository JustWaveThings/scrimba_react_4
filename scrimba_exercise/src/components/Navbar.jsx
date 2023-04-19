import logo from '../assets/Airbnb-Logo.wine.png';

function Navbar() {
	return (
		<nav className="Navbar">
			<img
				src={logo}
				className="App-logo"
				alt="logo"
				height="80px"
			/>
		</nav>
	);
}

export default Navbar;
