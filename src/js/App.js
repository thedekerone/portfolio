import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import firstImg from './imgs/unit-test-2.jpg';
import secImg from './imgs/unit-test-1.jpg';
export default class App extends Component {
	state = {
		slides : [
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
				imgPath     : firstImg,
				active      : false
			},
			{
				title       : 'The Bakery2',
				description : 'Bakery website example',
				identifier  : 'slide3',
				imgPath     : secImg,
				active      : false
			}
		],
		show   : 1
	};

	handleClick = () => {
		switch (this.state.show) {
			case 1: {
				this.setState({
					show   : 2,
					slides : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: false }
					]
				});
				break;
			}
			case 2: {
				this.setState({
					show   : 3,
					slides : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: true },
						{ ...this.state.slides[2], active: true }
					]
				});
				break;
			}
			case 3: {
				this.setState({
					show   : 1,
					slides : [
						{ ...this.state.slides[0], active: true },
						{ ...this.state.slides[1], active: false },
						{ ...this.state.slides[2], active: false }
					]
				});
				break;
			}
		}
	};
	render() {
		return (
			<div>
				<Navbar />

				<Display slide={this.state.slides} show={this.state.show} />

				<span onClick={this.handleClick} className='btn btn--activate' id='action-button'>
					DO
				</span>
			</div>
		);
	}
}
