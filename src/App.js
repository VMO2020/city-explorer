import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [location, setLocation] = useState({});
	const [reset, setReset] = useState(false);

	const handleChange = (event) => {
		// console.log(event.target.value);
		setSearchQuery(event.target.value);
	};

	const handleReset = () => {
		setSearchQuery('');
		setLocation({});
		setReset(false);
	};

	const getLocation = async () => {
		try {
			const data = await axios.get(
				`https://eu1.locationiq.com/v1/search?key=${
					process.env.REACT_APP_ACCESS_TOKEN
				}&q=${searchQuery.toLowerCase()}&format=json`
			);
			// console.log(data.data[0]);
			setLocation(data.data[0]);
			setReset(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<h1>City Explorer</h1>
			<input
				value={searchQuery}
				onChange={handleChange}
				placeholder="Place name"
			/>

			{reset ? (
				<button onClick={handleReset}>Reset</button>
			) : (
				<button onClick={getLocation}>Explore</button>
			)}
			<h2>{location.display_name}</h2>
			{location.lat && (
				<div className="data-container">
					<p>
						<span>lat: </span>
						{location.lat}
					</p>
					<p>
						<span>lon: </span>
						{location.lon}
					</p>
				</div>
			)}
		</div>
	);
}

export default App;
