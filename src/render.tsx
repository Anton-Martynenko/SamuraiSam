import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AllType} from './App';
import {addNewDialog, addPost, updateNewDialogText, updateNewPostText} from "./redax/state";


export const rerenderEntireTree = (state: AllType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addNewDialog={addNewDialog}
             updateNewDialogText={updateNewDialogText}/>,
        document.getElementById('root')
    );
}

