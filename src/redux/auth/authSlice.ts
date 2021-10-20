import {createSlice} from '@reduxjs/toolkit';
import {EMAIL_SEND_CREDS} from "../../constants";
import emailjs from 'emailjs-com';

const initialState: RegDefinedTypes = {
    users: [],
    email: "",
    uuid: '',
    isLogined: false,
    loading: false
}

export const AuthSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setSignup: (state, action) => {
            return {
                ...state,
                email: action.payload
            }
        },
        setUUID: (state, action) => {
            return {
                ...state,
                uuid: action.payload,
            }
        },
        setLoading: (state, action) => {
            return {
                ...state,
                loading: action.payload
            }
        },
        setUsers: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        },
        setLogin: (state, action) => {
            return {
                ...state,
                isLogined: action.payload
            }
        }
    },
})

const localStorageOperations = (newData: any) => {
    const storageData: any = localStorage.getItem('users')
    if (storageData) {
        const DATA = [...JSON.parse(storageData), newData]
        localStorage.setItem('users', JSON.stringify(DATA))
    } else {
        localStorage.setItem('users', JSON.stringify([newData]))
    }
}

export const sendEmail = (uuid: string) => (dispatch: any) => {
    dispatch(setLoading(true))
    emailjs.send(EMAIL_SEND_CREDS.serviceID, EMAIL_SEND_CREDS.templateID, {
        uuid: uuid
    }, EMAIL_SEND_CREDS.userID)
        .then(res => {
            if (res.status === 200) {
                const data: { uuid: string, qrs: any, avatar: string } = {uuid: uuid, qrs: [], avatar: ''}
                dispatch(setLoading(false))
                dispatch(setUsers(data))
                localStorageOperations(data)
            }
        })
        .catch(err => {
            dispatch(setLoading(false))
        })
}

export const {setSignup, setUUID, setLoading, setUsers, setLogin} = AuthSlice.actions
export default AuthSlice.reducer