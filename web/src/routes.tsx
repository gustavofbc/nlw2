import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, RouteProps } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeatherForm';
import Principal from './pages/Principal';
import Registered from './pages/Registered';
import ResetSent from './pages/ResetSent';
import PasswordRecovery from './pages/PasswordRecovery';
import RegisterUser from './pages/RegisterUser';

import { isAuthenticated } from './services/auth';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest}) => {
    if(!Component) return null;
    return(
    <Route {...rest} 
        render={ props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: {from: props.location} }} />
            )
        }
    />
    )
    }

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Principal} />
            <Route path="/home" exact component={Landing} />
            <PrivateRoute path="/home" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/registered" component={Registered} />
            <Route path="/reset-sent" component={ResetSent} />
            <Route path="/password-recovery" component={PasswordRecovery} />
            <Route path="/register-user" component={RegisterUser} />
        </BrowserRouter>
    )
}

export default Routes;