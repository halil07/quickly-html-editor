import { useState } from "react"

import SimpleOrganik from "./pages/SimpleOrganik";
import CoffeBreak from "./pages/CoffeBreak";
import PizzaPlace from "./pages/PizzaPlace";

function App() {
	const [moduleName, setModule] = useState('');
	return <div>
		<div className="btn-group" role="group" aria-label="Basic example">
			<button className="btn btn-primary" onClick={() => setModule("simple-organik")} >Simple Organik</button>
			<button className="btn btn-primary" onClick={() => setModule("pizza-place")}>Pizza Place</button>
			<button className="btn btn-primary" onClick={() => setModule("coffee-break")}>Coffee Break</button>
		</div>
		{moduleName === 'simple-organik' ? <SimpleOrganik /> : null}
		{moduleName === 'pizza-place' ? <PizzaPlace /> : null}
		{moduleName === 'coffee-break' ? <CoffeBreak /> : null}
	</div>
}

export default App
