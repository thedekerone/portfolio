import React from 'react';

export default function ImgSlider(props) {
	return (
		<div className='img-slider'>
			{props.slide.map((e) => {
				return (
					<div
						className='bg-section'
						style={e.active ? { height: '100%' } : { height: '0' }}
						id={e.identifier}>
						<img src={e.imgPath} alt='fist' />
					</div>
				);
			})}
		</div>
	);
}
