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
    photoUrl: string
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

let initialState: UsersType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://i.pinimg.com/736x/01/ce/b6/01ceb608fc9d453a782b9fd1cc3e8302.jpg',
        //     followed: false,
        //     fullName: 'Dimych',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://i.pinimg.com/736x/01/ce/b6/01ceb608fc9d453a782b9fd1cc3e8302.jpg',
        //     followed: true,
        //     fullName: 'Igor',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://i.pinimg.com/736x/01/ce/b6/01ceb608fc9d453a782b9fd1cc3e8302.jpg',
        //     followed: false,
        //     fullName: 'Katya',
        //     status: 'I am a boss too',
        //     location: {city: 'Omsk', country: 'Russia'}
        // }
    ]
};

const usersReducer = (state: UsersType = initialState, action: any): UsersType => {
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

export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})

export default usersReducer;