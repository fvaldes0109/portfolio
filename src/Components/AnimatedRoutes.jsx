import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';

function AnimatedRoutes() {

	return (
		<AnimatePresence>
			<Routes>
				<Route className="main-component" path='/' element={<Home />} />
				<Route className="main-component" path='/about' element={<About />} />
				<Route className="main-component" path='/projects' element={<Projects />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;