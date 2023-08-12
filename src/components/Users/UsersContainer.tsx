import React from 'react';
import {Users} from "./Users";
import {StateType} from "../../redax/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redax/message-reducer";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersType, UserType} from "../../redax/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redax/redux-store";

export type MapStateToPropsType = {
    users: Array<UserType>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;