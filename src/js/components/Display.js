import React from 'react';
import ImgSlider from './ImgSlider';
import InfoSlider from './InfoSlider';

export default function Display(props) {
	return (
		<section className='main'>
			<ImgSlider slide={props.slide} show={props.show} />
			<InfoSlider slide={props.slide} show={props.show} mainColor={props.mainColor} />
		</section>
	);
}
