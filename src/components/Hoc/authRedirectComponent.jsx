import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const authRedirectComponent = (Component) => {
    let mapStateToProps = (state) => {
        return{
        isAuth : state.usersPage.isAuth
        }
    }
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth){ return <Redirect to='/login'/>
            }
            return <Component {...this.props} /> 
        }
    }
    let ConnetcedComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnetcedComponent;
}


export default authRedirectComponent;