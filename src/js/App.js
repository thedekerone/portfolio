import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import firstImg from './imgs/unit-test-2.jpg';
import secImg from './imgs/unit-test-1.jpg';
import thirdImg from './imgs/unit-test-3.jpg';
import fourthImg from './imgs/unit-test-4.jpg';
import { throttle } from 'lodash';

export default class App extends Component {
	state = {
		slides    : [
			{
				title       : 'Farmkart',
				description : 'Farm website example',
				identifier  : 'slide1',
				imgPath     : firstImg,
				active      : true
			},
			{
				title       : 'The Bakery',
				description : 'Bakery website example',
				identifier  : 'slide2',
				imgPath     : secImg,
				active      : true
			},
			{
				title       : 'Yu-Gi-Oh Cards',
				description : 'Yugioh cards searcher',
				identifier  : 'slide3',
				imgPath     : thirdImg,
				active      : true
			},
			{
				title       : 'Chankillo Farmers',
				description : 'Farm website example',
				identifier  : 'slide3',
				imgPath     : fourthImg,
				active      : true
			}
		],
		show      : 1,
		mainColor : 'rgb(119, 19, 17)'
		// rgb(49, 0, 164)
		// rgb(0, 164, 101)
		// rgb(161, 164, 0)
	};

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
					mainColor : '#542266',
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
					mainColor : 'rgb(119, 19, 17)',
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
		// console.log(this.state.show);
		switch (this.state.show) {
			case 1: {
				this.setState({
					mainColor : '#542266',

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
					mainColor : 'rgb(119, 19, 17)',
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
	componentDidMount() {
		document.addEventListener(
			'mousewheel',
			throttle(
				(e) => {
					console.log(window);

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
			console.log(te, ts + 30);
			if (te > ts + 15) {
				this.handleClickSubir();
			}
			if (te < ts - 15) {
				this.handleClickBajar();
			}
		});

		// window.addEventListener(
		// 	'touchmove',
		// 	throttle(
		// 		(e) => {
		// 			console.log(e);

		// 			this.handleClickBajar();
		// 		},
		// 		700,
		// 		{ trailing: false }
		// 	)
		// );
	}
	render() {
		return (
			<div>
				<Navbar mainColor={this.state.mainColor} />

				<Display slide={this.state.slides} show={this.state.show} mainColor={this.state.mainColor} />

				{/* <span onClick={this.handleClickBajar} className='btn btn--activate' id='action-button'>
					DO bajar
				</span>
				<span onClick={this.handleClickSubir} className='btn btn--activate btn__subir' id='action-button'>
					DO subir
				</span> */}
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
			</div>
		);
	}
}
