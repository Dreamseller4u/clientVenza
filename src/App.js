import React from 'react';
import './App.css';
import { Route, Redirect, withRouter, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserThunk, signOutThunk } from './redux/usersReducer'
import { compose } from 'redux';
import { Backend } from './components/Admin/AdminContainer';
import LoginComponent from './components/Login/LoginComponent';
import HomeContainer from './components/HomeComponents/HomeInterface/HomeContainer';
import NavbarContainer from './components/common/NavBar/NavbarContainer';
import SearchBikesListContainer from './components/HomeComponents/BikesList/SearchBikesListContainer';

class App extends React.Component {
  componentDidMount() {
    this.props.setUserThunk()
    
  }
  render() {
    return (
      <>
        <main>
          <NavbarContainer />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/search' render={() => <SearchBikesListContainer />} />
            <Route path='/backend' component={Backend} />
            <Route path='/login' render={() => <LoginComponent />} />
          </Switch>
        </main>
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.usersPage.isAuth,
    initialApp: state.usersPage.initialApp
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { setUserThunk, signOutThunk }))(App);
