import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";
import { useState } from "react";
import { Place } from "./api/Place";

function App()
{
	const [place, setPlace] = useState<Place | null>(null);

	return (
		<div className="h-screen w-screen grid grid-cols-12">
			<div className="col-span-3 p-2">
				<LocationSearch onPlaceClick={ (place) => setPlace(place) } />
			</div>
			<div className="col-span-9">
				<Map place={ place } />
			</div>
		</div>
	);
}

export default App;
