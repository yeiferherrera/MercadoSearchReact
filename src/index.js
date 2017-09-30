import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {App} from './App'


ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root'))

registerServiceWorker()

