import React from 'react'
import { getLocationThunk, addNewLocationThunk } from '../../../redux/locationReducer';
import { connect } from 'react-redux';
import Location from './Location';

class LocationComponent extends React.Component {
    componentWillMount(){
        this.props.getLocationThunk()
    }
    
    render () {
        return (
            <div>
                <Location {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        location: state.otherPage.location
    }
};

const LocationComponentContainer = connect(mapStateToProps, { getLocationThunk, addNewLocationThunk})(LocationComponent);

export default LocationComponentContainer;