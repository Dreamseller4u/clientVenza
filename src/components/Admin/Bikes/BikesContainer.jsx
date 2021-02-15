import { setBikesListThunk, addBikeThunk, deleteBikeThunk } from '../../../redux/bikesReducer'
import { connect } from 'react-redux';
import authRedirectComponent from '../../Hoc/authRedirectComponent';
import { compose } from 'redux';
import React from 'react';
import { AddBikesFormRedux } from './BikesAddForm';
import Bikes from './Bikes'
import {MDBBtn} from 'mdbreact'

class BikesContainer extends React.Component {
    componentDidMount() {
        this.props.setBikesListThunk();
        
    }
    state = {
        bikes: this.props.bikes,
        showForm: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
        this.setState({
                bikes: this.props.bikes
            })
        }
    }
    handleSubmit = (values) => {
         this.props.addBikeThunk(values)
         this.setState({
             showForm: false
         })
    }
    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
        
    }
    deleteBikeContainer = (bikeId) => {
        this.props.deleteBikeThunk(bikeId)
    }
    render() {
        return (
            <div>
                <div>
                     
                     <MDBBtn style={{borderRadius: '30px', position:'absolute',top:'73px', right:'10px'}} onClick={this.toggleForm} color="success">Add new bike</MDBBtn>
                </div>
                <div>
                    {(this.state.showForm) ? <AddBikesFormRedux onSubmit={this.handleSubmit} /> : null}
                    <Bikes {...this.props} deleteBike={this.deleteBikeContainer} />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        bikes: state.listPage.bikes,
        bikeAria: state.listPage.addNewBike,
        preloder: state.listPage.preloder,
        bikeAdded: state.listPage.bikeAdded
    }
}
export const BikesContainerComponent =
    compose(authRedirectComponent,
        connect(mapStateToProps, { setBikesListThunk, addBikeThunk, deleteBikeThunk }))
        (BikesContainer)