import React from "react";
import { motion } from 'framer-motion/dist/framer-motion';

export default class Projects extends React.Component {

	render() {
		return (
			<motion.div 
				className="projects-page"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<h1>Projects Page</h1>
				<p>Under Construction</p>
			</motion.div>
		);
	}
}