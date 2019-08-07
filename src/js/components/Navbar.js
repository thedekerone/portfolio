import React, { useState } from 'react';
import hamburguer from '../imgs/hamburguer.svg';
import './css/main.css';

const Navbar = (props) => {
	var [
		color,
		setColor
	] = useState('white');
	return (
		<div className='navbar'>
			<div className='logo-container'>
				<a href='#' className='hamburguer' style={{ background: props.mainColor }}>
					<img src={hamburguer} width='35px' alt='ham' />
				</a>
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
