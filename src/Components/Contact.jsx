import React from "react";

export default class Contact extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			linksVisible: false,
		}

		this.iconSize = 60;
	}
	
	togglePanel() {
		this.setState({ linksVisible: !this.state.linksVisible });
	}

  render() {

		return (
			<div className="contact-component">
				<div className="contact-displayer">
					<p className={this.state.linksVisible ? 'invisible' : ''}><strong>Contact Me</strong></p>
					<div className="down-button" onClick={this.togglePanel.bind(this)}>
						<div className={`arrow ${this.state.linksVisible ? 'down' : 'up'}`}></div>
					</div>
				</div>

				<div className={`links${this.state.linksVisible ? '' : ' invisible'}`}>
					<div className={`link-container${this.state.linksVisible ? ' above' : ''}`}>
						<a href="https://www.linkedin.com/in/fernando-vald%C3%A9s-garc%C3%ADa-a46142221/" target="_blank" rel="noopener noreferrer">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/000000/linkedin.svg`} alt="LinkedIn Icon" />
						</a>
					</div>
					<div className={`link-container${this.state.linksVisible ? ' above' : ''}`}>
						<a href="https://twitter.com/CyberNet_inc01" target="_blank" rel="noopener noreferrer">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/000000/twitter.svg`} alt="Twitter Icon" />
						</a>
					</div>
					<div className={`link-container${this.state.linksVisible ? ' above' : ''}`}>
						<a href="https://github.com/fvaldes0109/" target="_blank" rel="noopener noreferrer">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/000000/github.svg`} alt="Github Icon" />
						</a>
					</div>
					<div className={`link-container${this.state.linksVisible ? ' above' : ''}`}>
						<a href="mailto:fvaldes0109@gmail.com">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/000000/gmail.svg`} alt="Mail Icon" />
						</a>
					</div>
				</div>

			</div>
		);
	}
}