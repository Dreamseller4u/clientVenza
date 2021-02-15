import React, { Component } from 'react'
import BikesList from './BikeList'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Preloader from '../../common/Preloder/preloder'
import {setBikesListThunk} from '../../../redux/bikesReducer'

class BikesListContainer extends Component {
    componentDidMount (){
        this.props.setBikesListThunk()
    }
    render() {
        return (
            <div> 
                <BikesList {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return {
        availiblesBikes: state.search.availiblesBikes,
        allBikes: state.listPage.bikes,
        useSearch: state.search.useSearch,
        dateInfo:{
            startDate: state.search.startDate,
            endDate: state.search.endDate,
            pickUp: state.search.pickUp,
            dropOff: state.search.dropOff
        }
    }
}

export default compose(connect(mapStateToProps, {setBikesListThunk}))(BikesListContainer)