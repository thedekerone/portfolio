import ReactDOM from 'react-dom';
import React from 'react';
import loadable from '@loadable/component';

const App = loadable(() => import('./js/App'));

ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
	module.hot.accept('./js/App.js', function() {
		ReactDOM.render(<App />, document.getElementById('root'));
		console.log('Accepting the updated printMe module!');
	});
}
