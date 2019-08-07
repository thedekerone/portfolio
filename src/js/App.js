import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import firstImg from './imgs/unit-test-2-2.jpg';
import secImg from './imgs/unit-test-1-2.jpg';
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
			slides    : [
				{
					title       : 'Farmkart',
					description : 'Farm website example',
					identifier  : 'slide1',
					imgPath     : firstImg,
					active      : true,
					path        : 'http://mauriciofow.me/sassie'
				},
				{
					title       : 'The Bakery',
					description : 'Bakery website example',
					identifier  : 'slide2',
					imgPath     : secImg,
					active      : true,
					path        : 'http://mauriciofow.me/the-bakery'
				},
				{
					title       : 'YGO Cards',
					description : 'Yugioh cards searcher',
					identifier  : 'slide3',
					imgPath     : thirdImg,
					active      : true,
					path        : 'http://mauriciofow.me/yugioh-deckbuilder'
				},
				{
					title       : 'Chankillo Farmers',
					description : 'Farm website example',
					identifier  : 'slide3',
					imgPath     : fourthImg,
					active      : true,
					path        : 'http://mauriciofow.me/ChankilloFarmers'
				}
			],
			start     : false,
			show      : 1,
			mainColor : 'rgb(142, 42, 42)'
		};
	}

	handleClickBajar = () => {
		// console.log('start');
		switch (this.state.show) {
			case 1: {
				this.setState({
					mainColor : 'rgb(35, 48, 65)',
					show      : 2,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: true },
						{ ...this.state.slides[3], active: false }
					]
				});
				break;
			}
			case 2: {
				this.setState({
					mainColor : 'rgb(0,107,71)',
					show      : 3,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: false },
						{ ...this.state.slides[3], active: false }
					]
				});
				break;
			}
			case 3: {
				this.setState({
					mainColor : '#b03049',
					// rgb(161, 164, 0
					show      : 4,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: false },
						{ ...this.state.slides[2], active: false },
						{ ...this.state.slides[3], active: false }
					]
				});
				break;
			}
			case 4: {
				this.setState({
					mainColor : 'rgb(142, 42, 42)',
					show      : 1,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: true },
						{ ...this.state.slides[3], active: true }
					]
				});
				break;
			}
		}
	};
	handleClickSubir = () => {
		switch (this.state.show) {
			case 1: {
				this.setState({
					mainColor : '#b03049',

					show      : 4,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: false },
						{ ...this.state.slides[2], active: false },
						{ ...this.state.slides[3], active: false }
					]
				});
				break;
			}
			case 2: {
				this.setState({
					mainColor : 'rgb(147, 62, 62)',
					show      : 1,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: true },
						{ ...this.state.slides[3], active: true }
					]
				});
				break;
			}
			case 3: {
				this.setState({
					mainColor : 'rgb(35, 48, 65)',
					show      : 2,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: true },
						{ ...this.state.slides[3], active: false }
					]
				});
				break;
			}
			case 4: {
				this.setState({
					mainColor : 'rgb(0,107,71)',

					show      : 3,
					slides    : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: false },
						{ ...this.state.slides[3], active: false }
					]
				});
				break;
			}
		}
	};
	componentWillMount() {}

	componentDidMount() {
		setTimeout(() => {
			!this.state.start ? this.setState({ start: true }) : null;
		}, 2000);
		document.addEventListener(
			'mousewheel',
			throttle(
				(e) => {
					if (e.deltaY < 0) {
						this.handleClickSubir();
					}
					if (e.deltaY > 0) {
						this.handleClickBajar();
					}
				},
				700,
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
				<Navbar mainColor={this.state.mainColor} />

				<span className='btn btn--activate' onClick={this.handleClickBajar}>
					<img src={icon} width='40px' alt='' />
				</span>

				<Display slide={this.state.slides} show={this.state.show} mainColor={this.state.mainColor} />
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