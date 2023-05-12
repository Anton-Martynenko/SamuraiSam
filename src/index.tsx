import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AllType, AppType} from './App';
import store from "./redax/redux-store";
// import store from "./redax/state";
import state, {OurStoreType, StateType, StoreType} from "./redax/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App store={store}
             // dispatch={store.dispatch.bind(store)}
             // state={state}
            //  addPost={store.addPost.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
            // addNewDialog={store.addNewDialog.bind(store)}
            // updateNewDialogText={store.updateNewDialogText.bind(store)}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});