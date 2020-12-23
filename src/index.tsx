import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import initAnalytics from './firebase';

ReactDOM.render(<App />, document.getElementById('root'));

initAnalytics();
