import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavButton(props) {

	const { position, routes, theme } = props;

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
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill={theme === 'light' ? '#000000' : '#ffffff'} clipRule="evenodd">
					<path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
				</svg>
			</div>
		</div>
	);
}

export default NavButton;