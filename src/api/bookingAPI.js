import * as axios from 'axios'

const instance  = axios.create({
    baseURL: 'http://localhost:4000/api'
   // withCredentials: true    
})

    export const getBookingList = () => { 
        return instance.get('/booking').then(res => res.data)
    }
    export const getBookingById = (bookingId) => { 
        return instance.get(`/booking/${bookingId}`).then(res => res.data)
    }
    export const addNewBooking = (boookingInfo) => {
        return instance.post('/booking/add', boookingInfo)
    }
    export const getVehiclesInfo = () => {
        return instance.get('/vehicles').then(res => res.data)
    }
    export const deleteBooking = (id) => {
        return instance.delete(`/booking/${id}`)
    }
    export const confirmBooking = (id) => {
        return instance.put(`/booking/${id}`)
    }
    export const updateBooking = (data) =>{
        return instance.post('booking/update', data)
    }
    export const updatePhoto = (data) =>{
        return instance.post('booking/update/photo', data)
    }