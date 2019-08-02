import React from 'react';
import hamburguer from '../imgs/hamburguer.svg';
import './css/main.css';

 const Navbar= ()=> {

		return (
			<div className='navbar'>
				<div className='logo-container'>
					<div className='hamburguer'>
						<img src={hamburguer} width='35px' alt='ham' />
					</div>
					<div className='name'>
						<h1>MAURICIO FOW</h1>
					</div>
				</div>
				<div className='btn btn--about'>
					<span>about me</span>
				</div>
			</div>
		);

}
export default Navbar