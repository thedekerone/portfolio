import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal(props) {
	return ReactDOM.createPortal(props.children, document.getElementById('waiting-page'));
}
