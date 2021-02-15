
import React, { PureComponent } from 'react'
import HomeSearch from './HomeSearch'
import "react-datepicker/dist/react-datepicker.css";
import { getAvailiblesBikesThunk } from '../../../redux/searchReducer';
import {getLocationThunk} from '../../../redux/locationReducer'
import {connect} from 'react-redux'

class HomeSerachContainer extends PureComponent {
    componentDidMount(){
        this.props.getLocationThunk()
    }
    render() {
        return (
            <>
            <HomeSearch {...this.props}/>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        location: state.otherPage.location,
        useSearch: state.search.useSearch
    }
}

export default connect(mapStateToProps, {getAvailiblesBikesThunk, getLocationThunk})( HomeSerachContainer)