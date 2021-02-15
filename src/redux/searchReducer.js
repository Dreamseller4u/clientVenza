import { getAvailiblesBikes } from "../api/searchAPI";
const GET_AVAILIBLES_BIKES ="GET_AVAILIBLES_BIKES"
const SET_DATE_SET_LOC = 'SET_DATE_SET_LOC'

let initsialState = {
    availiblesBikes: null,
    useSearch:false,
    startDate: new Date(),
    endDate:'',
    pickUp:'',
    dropOff: ''

};

const searchReducer = (state = initsialState, action) => {
    switch (action.type) {
        case GET_AVAILIBLES_BIKES:
            return{
                ...state,
                availiblesBikes: action.availiblesBikes,
                useSearch: true
            }
        case SET_DATE_SET_LOC:
            return{
                ...state,
                startDate: action.data.startDate,
                endDate: action.data.endDate,
                pickUp: action.data.pickUp,
                dropOff:action.data.dropOff
                        }
        default: return state;
    }
}
/// Dispatch
const getAvailiblesBikesAC = (availiblesBikes) => {return {type:GET_AVAILIBLES_BIKES, availiblesBikes}}
const setDateAndSetLoc = (data) => {return {type: SET_DATE_SET_LOC, data}}


/// Thunk
export const getAvailiblesBikesThunk = (bookingDate) => {
    debugger
    return (dispatch)=>{
       getAvailiblesBikes(bookingDate).then(res=> 
        dispatch(getAvailiblesBikesAC(res.data)))
        dispatch(setDateAndSetLoc(bookingDate))
    }
}



export default searchReducer;