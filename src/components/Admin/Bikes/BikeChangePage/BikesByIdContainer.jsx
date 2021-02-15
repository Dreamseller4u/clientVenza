import React, { Component } from 'react'
import { connect } from 'react-redux'
import BikeById from './BikeById'
import { compose } from 'redux'
import {setBikeByIdThunk, updateBikeThunk, setPrimaryThunk} from '../../../../redux/bikesReducer'
import { withRouter } from 'react-router-dom'

class BikeByIdContainer extends Component {
    componentDidMount(){
        this.props.setBikeByIdThunk(this.props.match.params.id);
    }
   
    render() {
        return (
            <div>
                <BikeById {...this.props}/>              
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        bikeById : state.listPage.bikeById
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {setBikeByIdThunk, updateBikeThunk, setPrimaryThunk}))(BikeByIdContainer)