import {PostsType, PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";
import {AllType} from "../App";

let rerenderEntireTree = (state: AllType) => {
    console.log("State changed");
}

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
        newDialogText: 'Hello'
    },

    messagePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'it\'s my first post', likesCount: 23}
        ],
        newPostText: "it-kamasutra"
    }
}

export const addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.messagePage.newPostText,
        likesCount: 0
    };
    state.messagePage.posts.push(newPost);
    state.messagePage.newPostText = '';
    rerenderEntireTree(state);
}

export const addNewDialog = () => {
    let newDialog: MessageType = {
        id: 6,
        message: state.profilePage.newDialogText
    };
    state.profilePage.messages.push(newDialog);
    state.profilePage.newDialogText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.messagePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const updateNewDialogText = (newDialog: string) => {
    state.profilePage.newDialogText = newDialog;
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}

export default state;
