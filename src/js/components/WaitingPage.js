import React, { useState } from 'react';

export default function WaitingPage(props) {
	var [
		display,
		setDisplay
	] = useState('flex');
	const changeDisplay = () => {
		setTimeout(() => {
			setDisplay('none');
		}, 3100);
	};
	changeDisplay();
	return (
		<div className='waiting-page' style={{ display: display }} id={props.start ? 'start' : null}>
			<h1>PROJECTS PORTFOLIO</h1>
		</div>
	);
}
