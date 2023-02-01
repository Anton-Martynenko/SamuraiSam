import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjNf8CW7bTkIMXXKp2XkYYuQqKB7zGVqrqg&usqp=CAU'/>
            { props.message }
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;