import {PostsType, PostType} from "../components/Profile/MyPosts/MyPosts";
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
    },

    messagePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'it\'s my first post', likesCount: 23}
        ],
        newPostText: "it-kamasutra"
    }
}

export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.messagePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
