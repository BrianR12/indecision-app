import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css'

//reponsible for bootrap things that live elsewhere
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

