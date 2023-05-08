import {AllType} from "../App";
import {PostType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const messageReducer = (state: AllType, action: any) => {
    if (action.type === ADD_POST) {
        let newPost: PostType = {
            id: 5,
            message: state.messagePage.newPostText,
            likesCount: 0
        };
        state.messagePage.posts.push(newPost);
        state.messagePage.newPostText = '';
    }  else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.messagePage.newPostText = action.newText;
    }
    return state;
}

export default messageReducer;