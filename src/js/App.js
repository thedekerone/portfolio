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
		mainColor : 'rgb(161, 164, 0)'
		// rgb(49, 0, 164)
		// rgb(0, 164, 101)
		// rgb(161, 164, 0)
	};

	handleClickBajar = () => {
		// console.log('start');
		switch (this.state.show) {
			case 1: {
				this.setState({
					mainColor : 'rgb(164, 74, 0)',
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
					mainColor : 'rgb(0, 164, 101)',
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
					mainColor : 'rgb(164, 0, 69)',
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
					mainColor : 'rgb(161, 164, 0)',
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
					mainColor : 'rgb(164, 0, 69)',

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
					mainColor : 'rgb(0, 164, 101)',
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
					mainColor : 'rgb(164, 74, 0)',
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
					mainColor : 'rgb(161, 164, 0)',

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
		window.addEventListener(
			'wheel',
			throttle(
				(e) => {
					// console.log(e);
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
	}
	render() {
		return (
			<div>
				<Navbar mainColor={this.state.mainColor} />

				<Display slide={this.state.slides} show={this.state.show} mainColor={this.state.mainColor} />

				<span onClick={this.handleClickBajar} className='btn btn--activate' id='action-button'>
					DO bajar
				</span>
				<span onClick={this.handleClickSubir} className='btn btn--activate btn__subir' id='action-button'>
					DO subir
				</span>
				<div className='dot-colection'>
					{this.state.slides.map((e, index) => {
						return <div className='dot' id={index === this.state.show - 1 ? 'selected' : null} />;
					})}
				</div>
			</div>
		);
	}
}
