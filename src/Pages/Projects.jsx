import { useState } from "react";
import { motion } from 'framer-motion/dist/framer-motion';

import ProjectItem from "../Components/ProjectItem";

import '../Styles/Projects.css'
import '../Styles/Media-Projects.css'

import projects from '../Assets/projects/projects.json';
import TextBalloon from "../Components/TextBalloon";

const Projects = (props) => {

	const [currentProject, setCurrentProject] = useState("movie");

	return (
		<motion.div 
			className="projects-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			
			<div className="projects-container">
				<ul>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["movie"]} id="movie">Movie Quiz App</ProjectItem>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["interportal"]} id="interportal">Interportal</ProjectItem>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["countries"]} id="countries">Countries Data</ProjectItem>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["countdown"]} id="countdown">Countdown Page</ProjectItem>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["todo"]} id="todo">TODO App</ProjectItem>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["ip"]} id="ip">IP Finder</ProjectItem>
					<ProjectItem projectTrigger={setCurrentProject} data={projects["moogle"]} id="moogle">Moogle Engine</ProjectItem>
				</ul>
				<div className="side">
					<a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
						<img src={`./images/${currentProject}.png`} width={700} alt="Project screenshot"/>
					</a>
					<TextBalloon text={projects[currentProject].description} />
				</div>
			</div>

		</motion.div>
	);
}

export default Projects;