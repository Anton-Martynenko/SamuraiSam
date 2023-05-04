import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AllType} from './App';
import store from "./redax/state";
import state from "./redax/state";

export const rerenderEntireTree = (state: AllType) => {
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost}
             updateNewPostText={store.updateNewPostText}
             addNewDialog={store.addNewDialog}
             updateNewDialogText={store.updateNewDialogText}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);