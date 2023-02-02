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
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import MyPosts, {PostType} from "./components/Profile/MyPosts/MyPosts";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";
import {DialogItemType} from "./components/Dialogs/Dialogs";
import {MessageType} from "./components/Dialogs/Dialogs";

export type AllType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    posts: Array<PostType>
}

const App = (props: AllType) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'it\'s my first post', likesCount: 23}
    ]*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                    <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
