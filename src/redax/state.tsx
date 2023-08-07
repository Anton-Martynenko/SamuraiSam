import {PostsType, PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";
import {AllType} from "../App";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import {UsersType, UserType} from "./users-reducer";


// let rerenderEntireTree = (state: AllType) => {
//     console.log("State changed");
// }
type DType = {
    id: number
    name: string
}
type MType = {
    id: number
    message: string
}
type NDTType = {
    newDialogText: string
}
type PType = {
    id: number
    message: string
    likesCount: number
}
type NPTType = {
    newPostText: string
}
export type PPType = {
    dialogs: Array<DType>
    messages: Array<MType>
    newDialogText: string
}
export type MPType = {
    posts: Array<PType>
    newPostText: string
}
export type UPType = {
    users: Array<UserType>
    // userId: number
    // newUsers: Array<UserType>
}
export type StateType = {
    profilePage: PPType
    messagePage: MPType
    usersPage: UsersType
}
export type StoreType = {
    _state?: StateType
    _callSubscriber?: (state: AllType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

export type OurStoreType = {
    store?: StoreType
}

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
    _callSubscriber(state: AllType) {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {

        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);

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

export default store;
