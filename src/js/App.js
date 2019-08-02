import React,{Component} from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import firstImg from './imgs/unit-test-2.jpg'
export default class App extends Component{
	state={
		slides:[
			{title:'Farmkart', description:'Farm website example', imgPath:firstImg},
			{title:'The Bakery', description:'Bakery website example', imgPath:firstImg},
		],
		
	}
	render(){

		return (
			<div>
				<Navbar />
				<Display slide={this.state.slides[0]} identifier='slide1' />
				<Display slide={this.state.slides[1]} identifier='slide2'/>
				<span className='btn btn--activate'>DO</span>
			</div>
		);
	}
}
