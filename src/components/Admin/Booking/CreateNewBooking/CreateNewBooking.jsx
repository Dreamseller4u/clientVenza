import React from 'react'
import CreateBookingForm from './CreateBookingForm'
import { useState } from 'react'

function CreateNewBooking(props) {
    const [pass , setPass] = useState('none')
    const [visa , setVisa] = useState('none')
    const handleSubmit = (values) => {
        const booking = {
        name: values.name,
        passport : values.passport,
        address :values.address,
        phone: values.phone,
        bikeId: values.bike.value,
        brand  :values.bike.brand,
        model : values.bike.model,
        plateNumber : values.bike.plateNumber,
        cost : (values.model === 'Forza' || 'X-Max') ? "140,000" : "",  //Дотелать проверку на стоимость байка
        pricePerDay : values.pricePerDay,
        alreadyPaid : values.alreadyPaid,
        payOnArrival : values.payOnArrival,
        totalRate: values.termRental,
        deposit : values.deposit,
        startDate:values.startDate,
        endDate: values.endDate,
        totalDays : values.totalDays,
        helmets : values.helmets,
        gas : values.gas,
        confirmed:true,
        description:values.description || 'none',
        passportImg: pass,
        visaImg: visa
        }
        props.addNewBookinThunk(booking)
    }
    const setPhoto = (pPhoto, vPhoto) => {
        setPass(pPhoto)
        setVisa(vPhoto)
    }
    
    return (
        <>
            <h1>CreateNewBooking</h1>
            <CreateBookingForm bikes={props.bikes} onSubmit={handleSubmit} setPhoto={setPhoto}/>
        </>
    )
}

export default CreateNewBooking
