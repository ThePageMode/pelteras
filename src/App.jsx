import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import Contact from "./components/Contact";
import '@fontsource-variable/lora'

function App() {

	
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/store" element={<Store />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
