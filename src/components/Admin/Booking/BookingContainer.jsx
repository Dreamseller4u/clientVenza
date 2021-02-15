import React, { Component } from 'react';
import Booking from './Booking';
import { getBookingThunk, deleteBookingThunk , updateBookingThunk, confirmBookingThunk, updatePhotoPass} from '../../../redux/bookingReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {MDBBtn} from 'mdbreact'



class BookingContainer extends Component {
    componentDidMount() {
        this.props.getBookingThunk()
    }
    render() {
        return (
            <div>
                <Booking {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        booking: state.booking.bookingList
    }
}
export default compose(
    connect(mapStateToProps, { getBookingThunk, deleteBookingThunk , updateBookingThunk, confirmBookingThunk, updatePhotoPass})
)(BookingContainer);
