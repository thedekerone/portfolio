import React, { useState } from 'react';
import hamburguer from '../imgs/hamburguer.svg';
import './css/main.css';
import './css/menu.css';

const Navbar = (props) => {
	var [
		color,
		setColor
	] = useState('white');

	var [
		width,
		setWidth
	] = useState(false);

	return (
		<div className='navbar' style={{ zIndex: 32 }}>
			<div
				className='colorful'
				style={{
					width           : width ? '100vw' : '0vw',
					height          : width ? '100vh' : '70px',
					backgroundColor : props.mainColor,

					transitionDelay : width ? '.5s,0s' : '0s , .5s'
				}}>
				<div className='menu-container'>
					{props.slide.map((e) => {
						<h1>Projects</h1>;
						return (
							<a
								href='#'
								className='menu-item'
								style={{
									transitionDelay    : width ? '.7s ,0s' : '0s, 0s',
									transitionDuration : '.4s',
									opacity            : width ? 1 : 0
								}}>
								{e.title}
							</a>
						);
					})}
				</div>
			</div>
			<div className='logo-container'>
				<span onClick={() => setWidth(!width)} className='hamburguer' style={{ background: props.mainColor }}>
					<img src={hamburguer} width='35px' alt='ham' />
				</span>
				<div className='name'>
					<h1>MAURICIO FOW</h1>
				</div>
			</div>
			<div
				className='btn btn--about'
				onMouseOver={() => {
					setColor(props.mainColor);
				}}
				onMouseLeave={() => {
					setColor('white');
				}}
				style={{ color: color }}>
				<span>about me</span>
			</div>
		</div>
	);
};
export default Navbar;
