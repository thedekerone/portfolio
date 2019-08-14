import React from 'react';
import { useSpring, animated, interpolate, config } from 'react-spring';

export default function ImgSlider(props) {
	return (
		<div className='img-slider'>
			{props.slide.map((e) => {
				const { h } = useSpring({
					h      : e.active ? 100 : 0,
					config : { duration: 500 }
				});
				return (
					<animated.div
						className='bg-section'
						style={{ zIndex: `${e.index}`, height: h.interpolate((h) => `${h}vh`) }}
						id={e.identifier}>
						<img src={e.imgPath} alt='fist' />
					</animated.div>
				);
			})}
		</div>
	);
}
