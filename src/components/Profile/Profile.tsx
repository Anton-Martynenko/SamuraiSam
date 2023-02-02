import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {PostsType} from "./MyPosts/MyPosts";

/*let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'it\'s my first post', likesCount: 23}
]*/

const Profile = (props: PostsType) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'it\'s my first post', likesCount: 23}
    ]*/

    return (
    <div className={s.content}>
        <Profileinfo />
        <MyPosts posts={props.posts}/>
    </div>
    );
}

export default Profile;