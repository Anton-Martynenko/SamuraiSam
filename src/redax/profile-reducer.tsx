import {AllType} from "../App";
import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";

const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG';

const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const profileReducer = (state: AllType, action: any) => {
    if (action.type === ADD_NEW_DIALOG) {
        let newDialog: MessageType = {
            id: 6,
            message: state.profilePage.newDialogText
        };
        state.profilePage.messages.push(newDialog);
        state.profilePage.newDialogText = '';
    }  else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
        state.profilePage.newDialogText = action.newDialog;
    }
    return state;
}

export default profileReducer;