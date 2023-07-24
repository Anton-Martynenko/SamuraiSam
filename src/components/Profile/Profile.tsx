import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {PostsType} from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/MyPosts";
import {AllType} from "../../App";
import MyPostsContainer, {ContainerPostsType} from "./MyPosts/MyPostsContainer";
import {Store} from "redux";
import store from "../../redax/redux-store";
import {StoreType} from "../../redax/state";




/*let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'it\'s my first post', likesCount: 23}
]*/

export type ProfileType = {
    posts?: Array<PostType>
    addPost?: (postMessage: string) => void
    newPostText?: string
    updateNewPostText?: (newText: string) => void
    store?: StoreType
}

const Profile = (props: ProfileType) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'it\'s my first post', likesCount: 23}
    ]*/

    return (
        <div className={s.content}>
            <Profileinfo/>
            {/*<MyPosts posts={props.posts}*/}
            {/*         newPostText={props.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*         addPost={props.addPost}*/}
            {/*         updateNewPostText={props.updateNewPostText}*/}
            {/*/>*/}
            <MyPostsContainer
                // store={props.store}
                              // posts={props.posts}
                              // addPost={props.addPost}
                              // newPostText={props.newPostText}
                              // updateNewPostText={props.updateNewPostText}
                              // dispatch={props.dispatch}/>
            />
        </div>
    );
}

export default Profile;