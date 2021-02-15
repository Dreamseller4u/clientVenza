import * as axios from 'axios'

const instance  = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true    
})


    export const getBikes = () => { 
        return instance.get('/bikes').then(res => res.data)
    }
    
    export const getBikeById =(bikeId) => {
        return instance.get(`/bikes/${bikeId}`).then(res => res.data)
    }

    export const addNewBike = (bike) => {
        let formData = new FormData();
        formData.append('brand', bike.brand)
        formData.append('model', bike.model)
        formData.append('mainImage', bike.image[0])
        formData.append('mainImage', bike.image[1])
        formData.append('mainImage', bike.image[2])
        formData.append('mainImage', bike.image[3])
        formData.append('plateNumber', bike.plateNumber)
        formData.append('pricePerDay', bike.pricePerDay)
        formData.append('pricePerMonth', bike.pricePerMonth)
        formData.append('deposit', bike.deposit)
        formData.append('isAvailible', bike.isAvailible)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        return instance.post('/addBike', formData, config)
    } 

    export const deleteBike = (bikeId) => {
       return instance.delete(`/bikes/${bikeId}`).then(res => res.data)
    }

    export const updateBike = (bikeData)  => {
        return instance.post('/bikes/update', bikeData)
    }
    export const setPrimaryImg = (_id, img)  => {
        return instance.post('/bikes/img', {_id, img})
    }