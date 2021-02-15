import React from 'react'
import Admin from './Admin'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Preloder from '../common/Preloder/preloder'
import {setAdmin} from '../../redux/adminReducer'
import {setUserThunk} from '../../redux/usersReducer'
import { Route, Switch } from 'react-router-dom';
import { BikesContainerComponent } from './Bikes/BikesContainer';
import LocationComponentContainer from './locationComponents/locationComponentContainer';
import Err404 from '../common/Errors/404'
import BikesByIdContainer from './Bikes/BikeChangePage/BikesByIdContainer'
import BookingContainer from './Booking/BookingContainer'
import CreateNewBookingContainer from './Booking/CreateNewBooking/CreateNewBookingContainer'
import Settings from './SettingsComponent/Settings'
import {setBikesListThunk} from '../../redux/bikesReducer'
import {getBookingThunk} from '../../redux/bookingReducer'

class AdminContainer extends React.Component {
  componentDidMount(){
    this.props.setAdmin()
    this.props.setUserThunk()
    this.props.setBikesListThunk()
    this.props.getBookingThunk()
    
  }
  interval = setInterval(() => {
    this.props.getBookingThunk()
  }, 300000);
    render() {
      if (!this.props.initialAdmin){
        return <Preloder />
      }else if (!this.props.isAuth){
        return <Redirect to='/login'/>
      }
      
     return( 
       <>
      <div className="container">
      
       <Switch>
          <Route exact path='/backend' render={() => <Admin {...this.props}/>} />
          <Route exact path='/backend/bikes' render={() => <BikesContainerComponent />} />
          <Route path='/backend/bikes/:id' render={() => <BikesByIdContainer />} />
          <Route path='/backend/location' render={() => <LocationComponentContainer />} />
          <Route exact path='/backend/booking' render={() => <BookingContainer />} />
          <Route path='/backend/booking/create' render={() => <CreateNewBookingContainer />} />
          <Route path='/backend/404' render={() => <Err404 />} />
          <Route exact path='/backend/settings' render={() => <Settings />} />
        </Switch>  
      </div>
      </>
      )
         
    }
}

let mapStateToProps = (state) => {
  return {
    initialAdmin: state.admin.initialAdmin,
    isAuth: state.usersPage.isAuth,
    bikes: state.listPage.bikes,
    bookings: state.booking.bookingList
  }
}
export const Backend = compose(
  withRouter,
  connect(mapStateToProps, {setAdmin, setUserThunk,setBikesListThunk, getBookingThunk }))(AdminContainer) 