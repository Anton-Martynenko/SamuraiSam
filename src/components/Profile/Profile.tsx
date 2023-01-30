import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>;
}

export default Profile;