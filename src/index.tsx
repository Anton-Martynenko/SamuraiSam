import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redax/state';

/*let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'it\'s my first post', likesCount: 23}
]

let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]*/

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);