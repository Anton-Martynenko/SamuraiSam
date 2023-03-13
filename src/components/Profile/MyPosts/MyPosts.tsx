import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AllType} from "../../../App";

export type PostType = {
    id: number
    message: string
    likesCount: number
    //addPost: () => void
}

export type PostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}


const MyPosts = (props: PostsType) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'it\'s my first post', likesCount: 23}
    ]*/

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        //let text = newPostElement.current?.value;

        //let text = () => {
        if (newPostElement.current) {

            //alert(newPostElement.current?.value);
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = "";
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>);
}

export default MyPosts;