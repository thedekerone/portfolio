import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function InfoSlider(props) {
	// slide is used to prevent the reversed method of mutating the original array
	const reversed = props.slide.slice().reverse();
	const { bg } = useSpring({
		bg     : props.mainColor,
		config : { duration: 300 }
	});
	// props.show-1 === index ? { opacity: 1 } : { opacity: 0 };
	// slides array is reversed 'cause images are shown from last to first (this is made to give it the animation it has )
	return (
		<animated.div
			className='infoSlider'
			style={props.movimiento ? { backgroundColor: bg.interpolate((bg) => `${bg}`) } : null}>
			{reversed.map((e, index) => {
				const { y } = useSpring({
					y         : props.show - 1 === index ? 0 : e.active ? 100 : -100,
					config    : { duration: 500 },
					immediate : e.active ? false : true
				});
				const { y2 } = useSpring({
					y2        : props.show - 1 === index ? 0 : e.active ? 100 : -100,
					config    : { duration: 500 },

					immediate : props.show - 1 === index ? false : e.active ? true : false
				});

				return (
					<animated.div
						className='desc-section'
						style={
							props.movimiento == 'subiendo' ? (
								{
									backgroundColor : bg.interpolate((bg) => `${bg}`),

									bottom          : 0,
									transform       : y.interpolate((y) => `translateY(${y}vh)`)
								}
							) : (
								{
									backgroundColor : bg.interpolate((bg) => `${bg}`),

									bottom          : 0,

									transform       : y2.interpolate((y2) => `translateY(${y2}vh)`)
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
					</animated.div>
				);
			})}
		</animated.div>
	);
}
