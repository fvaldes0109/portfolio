import React from "react";
import { motion } from 'framer-motion/dist/framer-motion';

export default class About extends React.Component {

	render() {
		return (
			<motion.div
				className="about-page"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<h1>About Me Page</h1>
				<p>Under Construction</p>
			</motion.div>
		);
	}
}