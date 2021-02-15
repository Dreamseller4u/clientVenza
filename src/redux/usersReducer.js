import { authentication, signOut } from './../api/userAPI'
import { auth } from '../Database/FirebaseConnect';


const SET_PRELODER = 'SET_PRELODER';
const SET_AUTH_USER = 'SET_AUTH_USER';

let initsialStore = {
    isAuth: null,
    preloder: true,
    initialApp: null
};

const userReducer = (state = initsialStore, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_PRELODER:
            return {
                ...state,
                preloder: action.isFetching
            }
        default: return state;
    }

}
export const setPreloder = (isFetching) => { return { type: SET_PRELODER, isFetching } }
const setAuthUser = (isAuth) => { return { type: SET_AUTH_USER, isAuth } }

export const setUserThunk = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setAuthUser(true))
            } else {
                dispatch(setAuthUser(false))
            }
        })
    }
}
export const signOutThunk = () => {
    return (dispatch) => {
        if (signOut()) {
            dispatch(setAuthUser(false))
            alert('Logaut success')
        }

    }

}
export const authThunk = (email, password) => {
    return (dispatch) => {
        authentication(email, password).then(() => {
            dispatch(setAuthUser(true))
        }).catch((e) => {
            alert(e.message)
        })
    }
}

export default userReducer;

