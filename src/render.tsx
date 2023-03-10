import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AllType} from './App';
import {addPost} from "./redax/state";


export const rerenderEntireTree = (state: AllType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

