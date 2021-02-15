import React from 'react';
import style from './login.module.css'
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import {authThunk} from '../../redux/usersReducer'
import { Redirect } from 'react-router-dom';

class LoginComponent extends React.Component {

    login = (values) => {
        this.props.authThunk(values.email, values.password)
    }
    
    render() {
        if(this.props.isAuth){
            return <Redirect to='/backend' />
        }
        return (
            <div className={style.loginPage}>
                <div className={style.loginBlock}>
                    <h4>Login</h4>
                    <LoginForm onSubmit={this.login}/>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return{
        isAuth: state.usersPage.isAuth
    }
}
export default connect(mapStateToProps, {authThunk})(LoginComponent);
