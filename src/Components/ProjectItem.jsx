import React from "react";

export default class ProjectItem extends React.Component {

	render() {

		return (
			<li onClick={() => this.props.projectTrigger(this.props.id)}>
				{this.props.children}
			</li>
		);
	}
}
