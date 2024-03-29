import {AllType} from "../App";
import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {MPType, StateType} from "./state";

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'it\'s my first post', likesCount: 23}
    ],
    newPostText: "it-kamasutra"
};

const messageReducer = (state: MPType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}]
            }
            // let newPost: PostType = {
            //     id: 5,
            //     message: state.newPostText,
            //     likesCount: 0
            // };
            // state.posts.push(newPost);
            // state.newPostText = '';
            // return state;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            // state.newPostText = action.newText;
            // return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default messageReducer;