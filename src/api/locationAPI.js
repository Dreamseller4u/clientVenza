import * as axios from 'axios'

const instance  = axios.create({
    baseURL: 'http://localhost:4000/api'
   // withCredentials: true    
})

    export const getLocation =() =>{
        return instance.get('/location')
    }
    export const addNewLocation = (data) => { 
        return instance.post('/location', data)
    }
   