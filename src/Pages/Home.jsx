import React from "react";
import { motion } from 'framer-motion/dist/framer-motion';

export default class Home extends React.Component {

	render() {
		return (
			<motion.div 
				className="home-page"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className="presentation">
					<h1>Hi! I'm Fernando. Nice to see you here!</h1>
					<p>I'm a Cuban programmer currently studying Computer Science 🖥️. My strongest area is Frontend Development
							but it's not the only one.</p>
					{/* <p>Wanna know more about me? Look around!</p> */}
				</div>
			</motion.div>
		);
	}
}