import React from 'react';
import {UsersType, UserType} from "../../redax/users-reducer";
import s from './Users.module.css';
import {UPType} from "../../redax/state";
import {UsersPropsType} from "./UsersContainer";

// export type UsersPropsType = {
//     users: Array<UserType>
//     usersPage: UPType
//     userId: number
//     newUsers: Array<UserType>
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UserType>) => void
// }

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://i.pinimg.com/736x/01/ce/b6/01ceb608fc9d453a782b9fd1cc3e8302.jpg',
            followed: false,
            fullName: 'Dimych',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/736x/01/ce/b6/01ceb608fc9d453a782b9fd1cc3e8302.jpg',
                followed: true,
                fullName: 'Igor',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/736x/01/ce/b6/01ceb608fc9d453a782b9fd1cc3e8302.jpg',
                followed: false,
                fullName: 'Katya',
                status: 'I am a boss too',
                location: {city: 'Omsk', country: 'Russia'}
            }])
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}