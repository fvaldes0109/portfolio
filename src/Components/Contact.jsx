import React from "react";

import getColor from '../Helpers/getColor.js';

export default class Contact extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			linksVisible: false,
			iconsColor: getColor(`--text-${this.props.theme}`),
		}

		this.iconSize = 60;
	}
	
	componentDidUpdate(prevProps) {
		
		if (prevProps.theme !== this.props.theme) {
			this.setState({ iconsColor: getColor(`--text-${this.props.theme}`) });
		}
	}

	togglePanel() {
		const wait = 50;
		document.querySelectorAll('.link-container').forEach((element, index) => {
			setTimeout(() => element.className = `link-container${this.state.linksVisible ? ' above' : ' invisible'}`
									, wait * index);
			;
		});
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

				<div className='links'>
					<div className='link-container invisible'>
						<a href="https://www.linkedin.com/in/fernando-vald%C3%A9s-garc%C3%ADa-a46142221/" target="_blank" rel="noopener noreferrer">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/${this.state.iconsColor}/linkedin.svg`} alt="LinkedIn Icon" />
						</a>
					</div>
					<div className='link-container invisible'>
						<a href="https://twitter.com/CyberNet_inc01" target="_blank" rel="noopener noreferrer">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/${this.state.iconsColor}/twitter.svg`} alt="Twitter Icon" />
						</a>
					</div>
					<div className='link-container invisible'>
						<a href="https://github.com/fvaldes0109/" target="_blank" rel="noopener noreferrer">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/${this.state.iconsColor}/github.svg`} alt="Github Icon" />
						</a>
					</div>
					<div className='link-container invisible'>
						<a href="mailto:fvaldes0109@gmail.com">
							<img src={`https://img.icons8.com/windows/${this.iconSize}/${this.state.iconsColor}/gmail.svg`} alt="Mail Icon" />
						</a>
					</div>
				</div>

			</div>
		);
	}
}