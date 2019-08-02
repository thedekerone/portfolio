import React from 'react';
import firstImg from '../imgs/unit-test-2.jpg';

export default function Display() {
	return (
		<section className='main'>
			<div className='bg-section'>
				<img src={firstImg} alt='fist' />
			</div>
			<div className='desc-section'>
				<div className='container'>
					<span>UI|Front-end</span>
					<h1>Farmkart</h1>
					<hr />
					<span>Farm website example</span>
					<div className='btn btn--project'>view project</div>
				</div>
			</div>
		</section>
	);
}
