import React from 'react';

export default function InfoSlider(props) {
	var altura = `${-(props.show - 1) * window.innerHeight}px`;
	return (
		<div className='infoSlider' style={{ top: altura }}>
			{props.slide.map((e) => {
				return (
					<div
						className='desc-section'
						style={{ backgroundColor: props.mainColor }}
						id={`info${e.identifier}`}>
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
