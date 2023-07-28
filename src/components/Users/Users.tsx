import React from 'react';
import {UsersType} from "../../redax/users-reducer";
import s from './Users.module.css';

export const Users = (props: UsersType) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button>Unfollow</button> : <button>Follow</button>}
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