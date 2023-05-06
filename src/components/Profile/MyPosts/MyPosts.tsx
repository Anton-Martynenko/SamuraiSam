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
    addPost?: (postMessage: string) => void
    newPostText: string
    updateNewPostText?: (newText: string) => void
    dispatch: (action: any) => void
}

let addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

let updateNewPostTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

const MyPosts = (props: PostsType) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'it\'s my first post', likesCount: 23}
    ]*/

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        //let text = newPostElement.current?.value;
        props.dispatch(addPostActionCreator());
        //let text = () => {
        // if (newPostElement.current) {

            //alert(newPostElement.current?.value);
            // props.addPost(newPostElement.current.value);

        // }

    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            // props.updateNewPostText(text);
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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