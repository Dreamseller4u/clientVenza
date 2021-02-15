import { addNewLocation, getLocation } from "../api/locationAPI";

const GET_LOCATION = 'GET_LOCATION'

let initsialStore = {
    location:null
};

const locationReducer = (state = initsialStore, action) => {
    switch (action.type) {
        case GET_LOCATION:
            return{
                ...state,
                location: [...action.location]
            }
       
        default: return state;
    }
}

const getLocationAC = (location) => {return{type:GET_LOCATION,location}}

export const getLocationThunk = () => {
    return (dispatch) =>{
        getLocation().then(res => dispatch(getLocationAC(res.data)))
    }

}

export const addNewLocationThunk = (data) => {
    return (dispatch) => {
        addNewLocation(data).then(res => alert(res.data.message) && getLocation())
    }
}
export default locationReducer;
