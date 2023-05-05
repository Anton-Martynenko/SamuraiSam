import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AllType} from './App';
import store from "./redax/state";
import state from "./redax/state";

export const rerenderEntireTree = (state: AllType) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             // addPost={store.addPost.bind(store)}
             // updateNewPostText={store.updateNewPostText.bind(store)}
             // addNewDialog={store.addNewDialog.bind(store)}
             // updateNewDialogText={store.updateNewDialogText.bind(store)}
            />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);