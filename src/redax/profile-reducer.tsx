import {AllType} from "../App";
import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";
import {PPType} from "./state";

const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG';

const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
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
};

const profileReducer = (state: PPType = initialState, action: any) => {
    switch (action.type) {
        case ADD_NEW_DIALOG:
            let newDialog = state.newDialogText;
            return {
                ...state,
                newDialogText: '',
                messages: [...state.messages, {id: 6, message: newDialog}]
            }
            // let newDialog: MessageType = {
            //     id: 6,
            //     message: state.newDialogText
            // };
            // let stateCopy = {...state};
            // stateCopy.messages = [...state.messages];
            // stateCopy.messages.push(newDialog);
            // stateCopy.newDialogText = '';
            // // state.messages.push(newDialog);
            // // state.newDialogText = '';
            // return stateCopy;
        case UPDATE_NEW_DIALOG_TEXT:
            return {
                ...state, newDialogText: action.newDialog
            }
            // let stateCopy = {...state};
            // stateCopy.newDialogText = action.newDialog;
            // // state.newDialogText = action.newDialog;
            // return stateCopy;
        default:
            return state;
    }
}

export const addNewDialogActionCreator = () => ({type: ADD_NEW_DIALOG});

export const updateNewDialogTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_DIALOG_TEXT, newDialog: text});

export default profileReducer;