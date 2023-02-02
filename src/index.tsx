import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'it\'s my first post', likesCount: 23}
]

ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);