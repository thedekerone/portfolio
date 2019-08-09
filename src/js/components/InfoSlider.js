import React from 'react';

export default function InfoSlider(props) {
	var altura = `${-(props.show - 1) * document.body.offsetHeight}px`;
	// slide is used to prevent the reversed method of mutating the original array
	const reversed = props.slide.slice().reverse();
	// props.show-1 === index ? { opacity: 1 } : { opacity: 0 };
	// slides array is reversed because the images are shown from last to first (this is made to give it the animation it has )
	return (
		<div className='infoSlider' style={{ backgroundColor: props.mainColor, transition: '1s' }}>
			{reversed.map((e, index) => {
				return (
					<div className='desc-contaier'>
						<div
							className='desc-section'
							style={
								props.movimiento == 'subiendo' ? (
									{
										backgroundColor    : props.mainColor,

										bottom             :
											props.show - 1 === index ? '0' : e.active ? '-100vh' : '100vh',

										transitionDuration : e.active ? null : '0s'
									}
								) : (
									{
										backgroundColor    : props.mainColor,

										bottom             :
											props.show - 1 === index ? '0' : e.active ? '-100vh' : '100vh',

										transitionDuration : props.show - 1 === index ? null : e.active ? '0s' : 'null'
									}
								)
							}
							id={`info${e.identifier}`}>
							<div className='container'>
								<span
									className='skills'
									style={
										props.show - 1 === index ? (
											{ opacity: 1, bottom: 0 }
										) : (
											{ opacity: 0, bottom: '-10px', transitionDelay: 0 }
										)
									}>
									UI|Front-end
								</span>
								<h1
									style={
										props.show - 1 === index ? (
											{ opacity: 1, letterSpacing: '.17rem' }
										) : (
											{ opacity: 0, letterSpacing: '-1.2rem', transitionDelay: 0 }
										)
									}>
									{e.title}
								</h1>
								<hr
									style={
										props.show - 1 === index ? (
											{ opacity: 1 }
										) : (
											{ opacity: 0, width: 0, transitionDelay: 0 }
										)
									}
								/>
								<span
									className='description'
									style={
										props.show - 1 === index ? (
											{ opacity: 1, left: 0 }
										) : (
											{ opacity: 0, left: '-20px', transitionDelay: 0 }
										)
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
											{ opacity: 0, bottom: '-30px', transitionDelay: 0 }
										)
									}
									className='btn btn--project'>
									view project
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
