import {AllType} from "../App";
import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";

const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG';

const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const profileReducer = (state: any, action: any) => {
    if (action.type === ADD_NEW_DIALOG) {
        let newDialog: MessageType = {
            id: 6,
            message: state.newDialogText
        };
        state.messages.push(newDialog);
        state.newDialogText = '';
    }  else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
        state.newDialogText = action.newDialog;
    }
    return state;
}

export const addNewDialogActionCreator = () => ({type: ADD_NEW_DIALOG});

export const updateNewDialogTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_DIALOG_TEXT, newDialog: text});

export default profileReducer;