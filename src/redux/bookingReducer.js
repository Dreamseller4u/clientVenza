import { getBookingList, addNewBooking, deleteBooking, updateBooking, confirmBooking,updatePhoto } from "../api/bookingAPI";

const GET_BOOKING = 'GET_BOOKING'
const DELETE_BOOKING = 'DELETE_BOOKING'



let initsialState = {
    bookingList: null

};

const bookingReducer = (state = initsialState, action) => {
    switch (action.type) {
        case GET_BOOKING:
            return{
                ...state,
                bookingList: action.bookinList
            }
        case DELETE_BOOKING:
            let bookArr = [...state.bookingList]
            for (let i = 0; i <= bookArr.length; i++) {
                if (bookArr[i]) {
                    (bookArr[i]._id === action.id) ? bookArr.splice(i, 1) : console.log(bookArr)
                }
            } 
            return {
                ...state,
                bookingList: bookArr
            }
        default: return state;
    }
}
/// Dispatch
const getBooking = (bookinList) => {return {type:GET_BOOKING, bookinList}}
const deleteBookingAC = (id) => { return { type: DELETE_BOOKING, id } }


/// Thunk
export const getBookingThunk = () => {
    return (dispatch)=>{
        getBookingList().then(res => 
            dispatch(getBooking(res)))
    }
}

export const addNewBookinThunk =(booking) => {
    return (dispatch)=>{
        addNewBooking(booking).then(res => alert(res.data.message))
    }
}

export const deleteBookingThunk = (bookingId) => {
    return (dispatch) => {
        deleteBooking(bookingId).then(res =>
            (res.data.code === 1)
            ? dispatch(deleteBookingAC(bookingId))
            : alert(res.data.message)
            )
    } 
}
export const confirmBookingThunk = (id) => {
    return (dispatch)=> {
        confirmBooking(id).then(getBookingList().then(res => 
            dispatch(getBooking(res))) && alert('Booking confirmed succsess'))
    }
}
export const updateBookingThunk = (data) =>{
    return (dispatch) => {
        updateBooking(data).then(res => alert(res.data.message))
    }
}
export const updatePhotoPass = (data) => {
    return (dispatch) => {
        updatePhoto(data).then(res => alert(res.data.message))
    }
} 



export default bookingReducer;