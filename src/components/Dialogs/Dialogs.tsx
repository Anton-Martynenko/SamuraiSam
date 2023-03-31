import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AllType} from "../../App";

export type DialogItemType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newDialogText: string
    updateNewDialogText: (newDialog: string) => void
    addNewDialog: (dialogMessage: string) => void
}


const Dialogs = (props: DialogsType) => {

    /*let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]



    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]*/

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newDialogElement = React.createRef<HTMLTextAreaElement>();
    const addNewDialog = () => {
        if (newDialogElement.current) {
            let text = newDialogElement.current.value;
            //let text = newDialogElement.current && newDialogElement.current.value;
            //alert(newDialogElement.current?.value);
            props.updateNewDialogText(text);
        }
    }
    let onDialogChange = () => {
        if (newDialogElement.current) {
            let text = newDialogElement.current.value;
            props.updateNewDialogText(text);
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newDialogElement}
                          value={props.newDialogText}
                          onChange={onDialogChange}/>
            </div>
            <div>
                <button onClick={addNewDialog}>Add Dialog</button>
            </div>
        </div>
    );
}

export default Dialogs;