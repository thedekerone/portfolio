import ReactDOM from 'react-dom';
import App from './js/App.js';
import React from 'react';

ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
	module.hot.accept('./js/App.js', function() {
		ReactDOM.render(<App />, document.getElementById('root'));
		console.log('Accepting the updated printMe module!');
	});
}
