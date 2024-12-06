/* @refresh reload */
import { render } from 'solid-js/web'
import './index.scss'
import App from './components/App/App'

const root = document.getElementById('root')

render(() => <App />, root!)
