import React from 'react';

export default function Display(props) {
	return (
		<section className='main' id={props.identifier}>
			<div className='bg-section'>
				<img src={props.slide.imgPath} alt='fist' />
			</div>
			<div className='desc-section'>
				<div className='container'>
					<span>UI|Front-end</span>
					<h1>{props.slide.title}</h1>
					<hr />
					<span>{props.slide.description}</span>
					<div className='btn btn--project'>view project</div>
				</div>
			</div>
		</section>
	);
}
