import React, { Component } from 'react';
import SideNavBar from './SideNavBar';
import SetPrice from './SettingsParts/SetPrice';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {setPriceThunk} from '../../../redux/bikesReducer'

class Settings extends Component {
    render() {
        return (
            <div>
                <SideNavBar />
                <h1>Settings</h1>
                <SetPrice  {...this.props}/>
               
            </div>
        );
    }
}

export default compose(
    connect(null, { setPriceThunk})
)(Settings);
