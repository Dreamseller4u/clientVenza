import React from 'react'
import BookingModalForm from './BookingModalForm'

function BookingModal(props) {
    
    return (
        <div>
            <h3> {props.content.model}</h3>
            <BookingModalForm  info={props} />
        </div>
    )
}

export default BookingModal
