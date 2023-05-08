import {PostsType, PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";
import {AllType} from "../App";

// let rerenderEntireTree = (state: AllType) => {
//     console.log("State changed");
// }

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG';

const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber (state: AllType) {
        console.log("State changed");
    },
    getState () {
        return this._state;
    },
    subscribe (observer: any) {
        this._callSubscriber = observer;
    },
    dispatch (action: any) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: this._state.messagePage.newPostText,
                likesCount: 0
            };
            this._state.messagePage.posts.push(newPost);
            this._state.messagePage.newPostText = '';
            this._callSubscriber(this._state);
        }  else if (action.type === ADD_NEW_DIALOG) {
            let newDialog: MessageType = {
                id: 6,
                message: this._state.profilePage.newDialogText
            };
            this._state.profilePage.messages.push(newDialog);
            this._state.profilePage.newDialogText = '';
            this._callSubscriber(this._state);
        }  else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.messagePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }  else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
            this._state.profilePage.newDialogText = action.newDialog;
            this._callSubscriber(this._state);
        }
    }
    // addPost () {
    //     let newPost: PostType = {
    //         id: 5,
    //         message: this._state.messagePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.messagePage.posts.push(newPost);
    //     this._state.messagePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // addNewDialog () {
    //     let newDialog: MessageType = {
    //         id: 6,
    //         message: this._state.profilePage.newDialogText
    //     };
    //     this._state.profilePage.messages.push(newDialog);
    //     this._state.profilePage.newDialogText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (newText: string) {
    //     this._state.messagePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // updateNewDialogText (newDialog: string) {
    //     this._state.profilePage.newDialogText = newDialog;
    //     this._callSubscriber(this._state);
    // },
}
// let state = {
//     profilePage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'}
//         ],
//
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'}
//         ],
//         newDialogText: 'Hello'
//     },
//
//     messagePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 2},
//             {id: 2, message: 'it\'s my first post', likesCount: 23}
//         ],
//         newPostText: "it-kamasutra"
//     }
// }
//
// export const addPost = () => {
//     let newPost: PostType = {
//         id: 5,
//         message: state.messagePage.newPostText,
//         likesCount: 0
//     };
//     state.messagePage.posts.push(newPost);
//     state.messagePage.newPostText = '';
//     rerenderEntireTree(state);
// }
//
// export const addNewDialog = () => {
//     let newDialog: MessageType = {
//         id: 6,
//         message: state.profilePage.newDialogText
//     };
//     state.profilePage.messages.push(newDialog);
//     state.profilePage.newDialogText = '';
//     rerenderEntireTree(state);
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.messagePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
// export const updateNewDialogText = (newDialog: string) => {
//     state.profilePage.newDialogText = newDialog;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer;
// }

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addNewDialogActionCreator = () => ({type: ADD_NEW_DIALOG});

export const updateNewDialogTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_DIALOG_TEXT, newDialog: text});

export default store;
