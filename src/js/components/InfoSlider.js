import React from 'react';

export default function InfoSlider(props) {
	console.log(window.scrollY);
	var altura = `${-(props.show - 1) * 969}px`;
	console.log(altura);
	return (
		<div className='infoSlider' style={{ top: altura }}>
			{props.slide.map((e) => {
				return (
					<div className='desc-section' id={`info${e.identifier}`}>
						<div className='container'>
							<span>UI|Front-end</span>
							<h1>{e.title}</h1>
							<hr />
							<span>{e.description}</span>
							<div className='btn btn--project'>view project</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
