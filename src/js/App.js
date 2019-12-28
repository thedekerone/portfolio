import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import firstImg from './imgs/unit-test-1-2.jpg';
import secImg from './imgs/unit-test-2-2.jpg';
import thirdImg from './imgs/unit-test-3-2.jpg';
import fourthImg from './imgs/unit-test-4-2.jpg';
import WaitingPage from './components/WaitingPage';
import icon from './imgs/scroll-down.svg';
import { throttle } from 'lodash';
import Modal from './components/Modal';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			slides     : [
				{
					title       : 'Farmkart',
					description : 'Farm website example',
					identifier  : 'slide1',
					imgPath     : firstImg,
					active      : false,
					path        : 'http://mauriciofow.me/sassie',
					index       : -1
				},
				{
					title       : 'The Bakery',
					description : 'Bakery website example',
					identifier  : 'slide2',
					imgPath     : secImg,
					active      : false,
					path        : 'http://mauriciofow.me/the-bakery',
					index       : -1
				},
				{
					title       : 'YGO Cards',
					description : 'Yugioh cards searcher',
					identifier  : 'slide3',
					imgPath     : thirdImg,
					active      : true,
					path        : 'http://mauriciofow.me/yugioh-deckbuilder',
					index       : -1
				},
				{
					title       : 'Bucciarati Store',
					description :
						' Progressive web app of an Ecommerce built from scratch using: Nextjs, Graphql and Mongodb',
					identifier  : 'slide4',
					imgPath     : fourthImg,
					active      : true,
					path        : 'https://bucciarati.mauriciofow.now.sh/',
					index       : -1
				}
			],
			start      : false,
			show       : 1,
			mainColor  : '#DB4C6B',
			movimiento : 'subiendo'
		};
	}

	// control principal
	// active=false ---------> image height:0
	// active=true ---------> image height:100vh
	// index controls zIndex which is used to make a slider effect
	// there's always 2 trues which are the actual img showing and the next to be shown
	handleClickBajar = () => {
		// console.log('start');
		switch (this.state.show) {
			case 1: {
				this.setState({
					mainColor  : 'rgb(35, 48, 65)',
					movimiento : 'bajando',
					show       : 2,
					slides     : [
						{ ...this.state.slides[0], active: false, index: -1 },
						{ ...this.state.slides[1], active: true, index: -1 },
						{ ...this.state.slides[2], active: true, index: 1 },
						{ ...this.state.slides[3], active: false, index: 1 }
					]
				});
				break;
			}
			case 2: {
				this.setState({
					mainColor  : '#DB4C6B',
					movimiento : 'bajando',
					show       : 3,
					slides     : [
						{ ...this.state.slides[0], active: true, index: -1 },
						{ ...this.state.slides[1], active: true, index: 1 },
						{ ...this.state.slides[2], active: false, index: 1 },
						{ ...this.state.slides[3], active: false, index: 1 }
					]
				});
				break;
			}
			case 3: {
				this.setState({
					mainColor  : 'rgb(0,107,71)',
					// rgb(161, 164, 0
					movimiento : 'bajando',
					show       : 4,
					slides     : [
						{ ...this.state.slides[0], active: true, index: 1 },
						{ ...this.state.slides[1], active: false, index: 1 },
						{ ...this.state.slides[2], active: false, index: -1 },
						{ ...this.state.slides[3], active: true, index: -1 }
					]
				});
				break;
			}
			case 4: {
				this.setState({
					mainColor  : '#DB4C6B',
					movimiento : 'bajando',
					show       : 1,
					slides     : [
						{ ...this.state.slides[0], active: false, index: 1 },
						{ ...this.state.slides[1], active: false, index: -1 },
						{ ...this.state.slides[2], active: true, index: -1 },
						{ ...this.state.slides[3], active: true, index: -1 }
					]
				});
				break;
			}
		}
	};

	// control subir

	handleClickSubir = () => {
		switch (this.state.show) {
			case 1: {
				this.setState({
					mainColor  : 'rgb(0,107,71)',

					movimiento : 'subiendo',
					show       : 4,
					slides     : [
						{ ...this.state.slides[0], active: true, index: 1 },
						{ ...this.state.slides[1], active: false, index: 1 },
						{ ...this.state.slides[2], active: false, index: -1 },
						{ ...this.state.slides[3], active: true, index: -1 }
					]
				});
				break;
			}
			case 2: {
				this.setState({
					mainColor  : '#DB4C6B',
					movimiento : 'subiendo',
					show       : 1,
					slides     : [
						{ ...this.state.slides[0], active: false, index: -1 },
						{ ...this.state.slides[1], active: false, index: -1 },
						{ ...this.state.slides[2], active: true, index: -1 },
						{ ...this.state.slides[3], active: true, index: 1 }
					]
				});
				break;
			}
			case 3: {
				this.setState({
					mainColor  : 'rgb(35, 48, 65)',
					movimiento : 'subiendo',
					show       : 2,
					slides     : [
						{ ...this.state.slides[0], active: false, index: -1 },
						{ ...this.state.slides[1], active: true, index: -1 },
						{ ...this.state.slides[2], active: true, index: 1 },
						{ ...this.state.slides[3], active: false, index: 1 }
					]
				});
				break;
			}
			case 4: {
				this.setState({
					mainColor  : '#DB4C6B',

					movimiento : 'subiendo',
					show       : 3,
					slides     : [
						{ ...this.state.slides[0], active: true, index: 1 },
						{ ...this.state.slides[1], active: true, index: 1 },
						{ ...this.state.slides[2], active: false, index: 1 },
						{ ...this.state.slides[3], active: false, index: -1 }
					]
				});
				break;
			}
		}
	};

	componentWillMount() {
		setTimeout(() => {
			!this.state.start ? this.setState({ start: true }) : null;
		}, 2500);
		document.addEventListener(
			'mousewheel',
			throttle(
				(e) => {
					if (e.deltaY < 0) {
						this.handleClickSubir();
						// console.log('sube');
					}
					if (e.deltaY > 0) {
						// console.log('baja');
						this.handleClickBajar();
					}
				},
				530,
				{ trailing: false }
			)
		);
		var ts;
		window.addEventListener('touchstart', (e) => {
			ts = e.touches[0].clientY;
		});
		window.addEventListener('touchend', (e) => {
			var te = e.changedTouches[0].clientY;
			if (te > ts + 15) {
				this.handleClickSubir();
			}
			if (te < ts - 15) {
				this.handleClickBajar();
			}
		});
	}
	render() {
		return (
			<div>
				<Navbar mainColor={this.state.mainColor} slide={this.state.slides} />

				{/* <span className='btn btn--activate' onClick={this.handleClickBajar}>
					<img src={icon} width='40px' alt='' />
				</span> */}

				<Display
					slide={this.state.slides}
					show={this.state.show}
					movimiento={this.state.movimiento}
					mainColor={this.state.mainColor}
				/>
				<div className='dot-colection'>
					{this.state.slides.map((e, index) => {
						return (
							<div className='dot-container'>
								<div className='dot' id={index === this.state.show - 1 ? 'selected' : null} />{' '}
								<p
									style={
										index === this.state.show - 1 ? (
											{ opacity: 1, marginLeft: '0px' }
										) : (
											{ opacity: 0, marginLeft: '30px' }
										)
									}>
									{e.title}
								</p>
							</div>
						);
					})}
				</div>
				<Modal style={{ display: 'none' }}>
					<WaitingPage start={this.state.start} />
				</Modal>
			</div>
		);
	}
}
