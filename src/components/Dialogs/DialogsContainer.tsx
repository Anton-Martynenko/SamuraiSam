import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AllType} from "../../App";
import {addNewDialogActionCreator, updateNewDialogTextActionCreator} from "../../redax/profile-reducer";
import {StoreType} from "../../redax/state";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export type DialogItemType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string
}

type DialogsContainerType = {
    dialogs?: Array<DialogItemType>
    messages?: Array<MessageType>
    newDialogText?: string
    updateNewDialogText?: (newDialog: string) => void
    addNewDialog?: (dialogMessage: string) => void
    store?: StoreType
}

const DialogsContainer = () => {

    // let state = props.store.getState().profilePage;
    //
    // const addNewDialog = () => {
    //     props.store.dispatch(addNewDialogActionCreator());
    // }
    // let onDialogChange = (text: string) => {
    //     props.store.dispatch(updateNewDialogTextActionCreator(text))
    // }

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().profilePage;

            const addNewDialog = () => {
                store.dispatch(addNewDialogActionCreator());
            }
            let onDialogChange = (text: string) => {
                store.dispatch(updateNewDialogTextActionCreator(text))
            }
            return <Dialogs profilePage={state}
                     updateNewDialogText={onDialogChange}
                     addNewDialog={addNewDialog}
                     newDialogText={state.newDialogText}/>
        }}
    </StoreContext.Consumer>
}

export default DialogsContainer;