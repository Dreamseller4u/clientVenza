import { getBikes, addNewBike, deleteBike, getBikeById, updateBike, setPrimaryImg } from "../api/vehicleApi";
import { getVehiclesInfo } from "../api/bookingAPI";
import { setPrice } from "../api/settingsAPI";

const ADDBIKE = 'ADD-BIKE';
const SET_BIKES = 'SET_BIKES'
const DEL_BIKE = 'DEL_BIKE'
const SET_VEHICLES_INFO ='SET_VEHICLES_INFO'
const SET_BIKE_BY_ID ='SET_BIKE_BY_ID'

let initsialState = {
    bikes: null,
    bikeAdded: false,
    bikeById:null,
    vehiclesInfo: null
};

const bikeReducer = (state = initsialState, action) => {

    switch (action.type) {
        case ADDBIKE:
            let bike = action.bikes
            return {
                ...state,
                bikes: [...state.bikes, bike],
                bikeAdded: true
            }
        case SET_BIKES:
            return {
                ...state,
                bikes: [...action.bikes]
            }
            case SET_BIKE_BY_ID:
                return {
                    ...state,
                    bikeById: action.bikeById
                }
        case DEL_BIKE:
            let bikesArr = [...state.bikes]
            for (let i = 0; i <= bikesArr.length; i++) {
                if (bikesArr[i]) {
                    (bikesArr[i]._id === action.id) ? bikesArr.splice(i, 1) : console.log(bikesArr)
                }
            }    
            return {
                ...state,
                bikes: bikesArr
            }
        case SET_VEHICLES_INFO:
            return {
                ...state,
                vehiclesInfo: action.info
            }         
        default: return state;
    }
}
 const addBikeAC = (bikes) => { return { type: ADDBIKE, bikes } }
 const deleteBikeAC = (id) => { return { type: DEL_BIKE, id } }
 const setBikesList = (bikes) => { return { type: SET_BIKES, bikes } }
 const setBikeById = (bikeById) => {return {type:SET_BIKE_BY_ID, bikeById}}
 const setVehiclesInfo = (info) => {return {type: SET_VEHICLES_INFO, info}}

export const setBikeByIdThunk = (bikeId) => {
    return (dispatch)=>{
        getBikeById(bikeId).then(data => 
            dispatch(setBikeById(data)))
    }
 }

export const setBikesListThunk = () => {
    return (dispatch) => {
        getBikes().then(data =>
            dispatch(setBikesList(data))
        )
    
    }
}
export const addBikeThunk = (bike) => {
    return (dispatch) => {
        addNewBike(bike).then(res =>
            (res.data.code = 1) ? dispatch(addBikeAC(bike),
                alert(res.data.message))
                : null)
    }
}
export const deleteBikeThunk = (bikeId) => {
    return (dispatch) => {
        deleteBike(bikeId).then(data =>
            (data.code === 1) 
            ? dispatch(deleteBikeAC(bikeId))
             : null)
    }
}

export const setBikeBookThunk = () => {
    return (dispatch) =>  {
        getVehiclesInfo().then(data => 
            dispatch(setVehiclesInfo(data)))
    }
}
export const updateBikeThunk = (bikeData) => {
    return (dispatch) => {
        updateBike(bikeData).then(res => alert(res.data.message))
        
    }
}
export const setPrimaryThunk = (_id, img) => {
    return (dispatch) => {
        setPrimaryImg(_id, img).then(res => alert(res.data.message))
    }
}
export const setPriceThunk = (prices) => {
    return (dispatch)=>{
        setPrice(prices).then(res => alert(res.data.message))
    }
}

export default bikeReducer;
