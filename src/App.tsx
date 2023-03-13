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
import {addPost} from "./redax/state";

export type AllType = {
     //state: {
         profilePage: {
         dialogs: Array<DialogItemType>
         messages: Array<MessageType>
     }

         messagePage: {
             posts: Array<PostType>
         }
     }


//}
export type AppType = {
    state: AllType
    addPost: (postMessage: string) => void
}

const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.profilePage.dialogs} messages={props.state.profilePage.messages}/> }/>
                    <Route path='/profile' render={ () => <Profile posts={props.state.messagePage.posts}
                                                                   addPost={props.addPost}/> }/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
