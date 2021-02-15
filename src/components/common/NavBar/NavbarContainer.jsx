
import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import {signOutThunk} from '../../../redux/usersReducer'

class NavbarContainer extends Component {
    signOut = () =>  {
        this.props.signOutThunk()
    } 
    render() {
        return (
            <div>
                <Navbar signOut={this.signOut}/> 
            </div>
        );
    }
}

export default connect(null,{signOutThunk})(NavbarContainer);
