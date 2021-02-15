import * as axios from 'axios'

const instance  = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true    
})


    export const setPrice = (prices) => { 
        return instance.post('/settings/price', prices)
    }
