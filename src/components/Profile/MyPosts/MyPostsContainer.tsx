import React, {LegacyRef} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/message-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {StoreType} from "../../../redax/state";
import {StoreContext} from "../../../StoreContext";


export type PostType = {
    id: number
    message: string
    likesCount: number
    //addPost: () => void
}

export type ContainerPostsType = {
    posts?: Array<PostType>
    addPost?: (postMessage: string) => void
    newPostText?: string
    updateNewPostText?: (newText: string) => void
    store?: StoreType
}



const MyPostsContainer = () => {
    // let state = props.store.getState();
    // let addPost = () => {
    //     //let text = newPostElement.current?.value;
    //     props.store.dispatch(addPostActionCreator());
    //     // props.store.dispatch(addPostActionCreator());
    //
    // }
    //
    // let onPostChange = (text: string) => {
    //     // if (newPostElement.current) {
    //     //     let text = newPostElement.current.value;
    //         // props.updateNewPostText(text);
    //         let action = updateNewPostTextActionCreator(text);
    //         props.store.dispatch(action);
    //         // props.store.dispatch(action);
    //     // }
    // }
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts posts={state.messagePage.posts}
                         addPost={addPost}
                         newPostText={state.messagePage.newPostText}
                         updateNewPostText={onPostChange}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;