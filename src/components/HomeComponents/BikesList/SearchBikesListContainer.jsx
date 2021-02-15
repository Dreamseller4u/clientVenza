import React, { Component } from 'react'
import SearchBikesList from './SearchBikesList'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Preloader from '../../common/Preloder/preloder'

class SearchBikesListContainer extends Component {
    render() {
        if (!this.props.availiblesBikes){
            return <Preloader />
        }
        return (
            <div> 
                <SearchBikesList {...this.props} />
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return {
        availiblesBikes: state.search.availiblesBikes
    }
}

export default compose(connect(mapStateToProps, {}))(SearchBikesListContainer)