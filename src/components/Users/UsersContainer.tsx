import React from 'react';
import {Users} from "./Users";
import {StateType} from "../../redax/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redax/message-reducer";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redax/users-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;