import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogItemType} from "./components/Dialogs/Dialogs";
import {MessageType} from "./components/Dialogs/Dialogs";
import {PostType} from "./components/Profile/MyPosts/MyPosts";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";
import {OurStoreType, StateType, StoreType} from "./redax/state";
import store from "./redax/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

//import {addPost} from "./redax/state";

export type AllType = {
    //state: {
    profilePage: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
        newDialogText: string
    }

    messagePage: {
        posts: Array<PostType>
        newPostText: string
    }
}


//}
export type AppType = {
    state: AllType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    updateNewDialogText?: (newDialog: string) => void
    addNewDialog?: (dialogMessage: string) => void
    dispatch: (action: any) => void
}

const App = (props: OurStoreType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer
                                                                  // dialogs={props.state.profilePage.dialogs}
                                                                  // messages={props.state.profilePage.messages}
                                                                  // newDialogText={props.state.profilePage.newDialogText}
                                                                  // dispatch={props.dispatch}
                        // updateNewDialogText={props.updateNewDialogText}
                        // addNewDialog={props.addNewDialog}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        // posts={props.state.messagePage.posts}
                        // newPostText={props.state.messagePage.newPostText}
                        // dispatch={props.dispatch}
                        // addPost={props.addPost}
                        // updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
