import { render, h } from 'preact';
import App from './app';
import './index.css';

const container = document.getElementById('root');
render(<App />, container);