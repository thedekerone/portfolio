import React from 'react';

export default function InfoSlider(props) {
	var altura = `${-(props.show - 1) * document.body.offsetHeight}px`;

	// props.show-1 === index ? { opacity: 1 } : { opacity: 0 };

	return (
		<div className='infoSlider' style={{ transform: `translateY(${altura})` }}>
			{props.slide.map((e, index) => {
				return (
					<div
						className='desc-section'
						style={{ backgroundColor: props.mainColor }}
						id={`info${e.identifier}`}>
						<div className='container'>
							<span
								className='skills'
								style={
									props.show - 1 === index ? (
										{ opacity: 1, bottom: 0 }
									) : (
										{ opacity: 0, bottom: '-10px' }
									)
								}>
								UI|Front-end
							</span>
							<h1
								style={
									props.show - 1 === index ? (
										{ opacity: 1, letterSpacing: '.17rem' }
									) : (
										{ opacity: 0, letterSpacing: '-1.2rem	' }
									)
								}>
								{e.title}
							</h1>
							<hr style={props.show - 1 === index ? { opacity: 1 } : { opacity: 0, width: 0 }} />
							<span
								className='description'
								style={
									props.show - 1 === index ? { opacity: 1, left: 0 } : { opacity: 0, left: '-20px' }
								}>
								{e.description}
							</span>
							<a
								href={e.path}
								target='_blank'
								style={
									props.show - 1 === index ? (
										{ opacity: 1, bottom: 0 }
									) : (
										{ opacity: 0, bottom: '-30px' }
									)
								}
								className='btn btn--project'>
								view project
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}
