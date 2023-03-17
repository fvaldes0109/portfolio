import React from "react";

import arrow_right from '../Assets/arrow-right.svg'

export default class NavButton extends React.Component {

  render() {
		return (
			<div className={`nav-button-area ${this.props.position}-button`}>
				<p><strong>Pagina</strong></p>
				<div className="side-button">
					<img src={arrow_right} alt="Arrow Right" width="30" />
				</div>
			</div>
		);
	}
}