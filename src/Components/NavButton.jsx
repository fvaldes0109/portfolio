import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import arrow_right from '../Assets/arrow-right.svg'

function NavButton(props) {

	const { position, routes } = props;

	const location = useLocation();
	const navigate = useNavigate();
	const [text, setText] = useState();

	const targetRoute = () => {

		const move = props.position === 'left' ? -1 : 1;
		const keysArray = Array.from(routes.keys());
		const index = keysArray.indexOf(location.pathname);
		const newRoute = keysArray[(index + move + keysArray.length) % keysArray.length];

		return newRoute;
	}

	const goToRouteText = targetRoute();

	useEffect(() => {
		setText(routes.get(goToRouteText));
	}, [routes, goToRouteText])


	return (

		<div className={`nav-button-area ${position}-button`}>
			<p><strong>{text}</strong></p>
			<div className="side-button" onClick={() => navigate(goToRouteText)}>
				<img src={arrow_right} alt="Arrow Right" width="30" />
			</div>
		</div>
	);
}

export default NavButton;