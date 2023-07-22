import React from "react";
import { motion } from 'framer-motion/dist/framer-motion';

import ProjectItem from "../Components/ProjectItem";

import '../Styles/Projects.css'

import projects from '../Assets/projects/projects.json';

export default class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
			currentProject: "movie",
    }

		this.changeProject = this.changeProject.bind(this);
  }

	changeProject(id) {
		this.setState({
			currentProject: id
		});
	}

	render() {

		return (
			<motion.div 
				className="projects-page"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				
				<div className="projects-container">
					<ul>
						<ProjectItem projectTrigger={this.changeProject} data={projects["movie"]} id="movie">Movie Quiz App</ProjectItem>
						<ProjectItem projectTrigger={this.changeProject} data={projects["interportal"]} id="interportal">Interportal</ProjectItem>
						<ProjectItem projectTrigger={this.changeProject} data={projects["countries"]} id="countries">Countries Data</ProjectItem>
						<ProjectItem projectTrigger={this.changeProject} data={projects["countdown"]} id="countdown">Countdown Page</ProjectItem>
						<ProjectItem projectTrigger={this.changeProject} data={projects["todo"]} id="todo">TODO App</ProjectItem>
						<ProjectItem projectTrigger={this.changeProject} data={projects["ip"]} id="ip">IP Finder</ProjectItem>
						<ProjectItem projectTrigger={this.changeProject} data={projects["moogle"]} id="moogle">Moogle Engine</ProjectItem>
					</ul>
					<div className="side">
							<a href={projects[this.state.currentProject].link} target="_blank" rel="noopener noreferrer">
								<img src={`./images/${this.state.currentProject}.png`} width={700} alt="Project screenshot"/>
							</a>
						{/* <div className="description">
							{projects[this.state.currentProject].description}
						</div> */}
					</div>
				</div>

			</motion.div>
		);
	}
}