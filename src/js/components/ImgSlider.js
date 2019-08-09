import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function ImgSlider(props) {
	return (
		<div className='img-slider'>
			{props.slide.map((e) => {
				return (
					<div
						className='bg-section'
						style={e.active ? { zIndex: e.index, height: '100%' } : { zIndex: e.index, height: '0' }}
						id={e.identifier}>
						<img src={e.imgPath} alt='fist' />
					</div>
				);
			})}
		</div>
	);
}
