import React from "react";
import Nav from "./Nav";
import TileContainer from "./src/TileContainer.js";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<TileContainer hogs={hogs}/>
		</div>
	);
}

export default App;
