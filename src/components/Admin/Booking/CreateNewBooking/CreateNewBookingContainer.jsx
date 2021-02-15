import React, { Component } from 'react'
import CreateNewBooking from './CreateNewBooking'
import { compose } from 'redux'
import {connect} from 'react-redux'
import { setBikeBookThunk , setBikesListThunk} from '../../../../redux/bikesReducer'
import { addNewBookinThunk } from '../../../../redux/bookingReducer'


class CreateNewBookingContainer extends React.Component {
    componentDidMount(){
        this.props.setBikeBookThunk()
        this.props.setBikesListThunk()
    }
  
    render() {
        return (
            <div>
                <CreateNewBooking {...this.props} />
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        vehiclesInfo : state.listPage.vehiclesInfo,
        bikes: state.listPage.bikes
    }
}

export default  compose(
    connect(mapStateToProps, {setBikeBookThunk, setBikesListThunk, addNewBookinThunk})
)(CreateNewBookingContainer)