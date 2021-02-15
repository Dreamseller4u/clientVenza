import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import Home from './Home'

class HomeContainer extends PureComponent {
  
    render() {
        return <Home availiblesBikes={this.props.availiblesBikes}/>
    }
}
const mapStateToProps = (state) => {
    return {
        availiblesBikes: state.search.availiblesBikes
    }
}
export default compose(withRouter,connect(mapStateToProps,null))(HomeContainer)