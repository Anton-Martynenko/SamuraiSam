import {AllType} from "../App";
import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {MessageType} from "../components/Dialogs/Dialogs";
import {PPType} from "./state";

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW';

const UNFOLLOW = 'UNFOLLOW';

const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     fullName: 'Dimych',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     fullName: 'Igor',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     fullName: 'Katya',
        //     status: 'I am a boss too',
        //     location: {city: 'Omsk', country: 'Russia'}
        // }
    ]
};

const usersReducer = (state: UsersType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users:
                    [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
        case UNFOLLOW:
            return {...state, users:
                    [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (id: number) => ({type: FOLLOW, userId: id});

export const unfollowAC = (id: number) => ({type: UNFOLLOW, userId: id});

export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users})

export default usersReducer;