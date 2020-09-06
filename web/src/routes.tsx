import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, RouteProps } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeatherForm';
import Principal from './pages/Principal';
import UserCreatedNotification from './pages/UserCreatedNotification';
import UserUpdatedNotification from './pages/UserUpdatedNotification';
import ResetSentNotification from './pages/ResetSentNotification';
import ClassesCreatedNotification from './pages/ClassesCreatedNotification';
import ClassesUpdatedNotification from './pages/ClassesUpdatedNotification';

import PasswordRecovery from './pages/PasswordRecovery';
import RegisterUserForm from './pages/RegisterUserForm';

import { isAuthenticated } from './services/auth';
import ClassesList from './pages/ClassesList';
import PerfilForm from './pages/PerfilForm';
import EditPerfilForm from './pages/EditPerfilForm';
import EditTeacherForm from './pages/EditTeatherForm';

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
            {/* <Route path="/home" exact component={Landing} /> */}
            <PrivateRoute path="/home" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/edit-classes-form" component={EditTeacherForm} />

            <Route path="/user-created-notification" component={UserCreatedNotification} />
            <Route path="/user-updated-notification" component={UserUpdatedNotification} />
            <Route path="/reset-sent-notification" component={ResetSentNotification} />
            <Route path="/classes-created-notification" component={ClassesCreatedNotification} />
            <Route path="/classes-updated-notification" component={ClassesUpdatedNotification} />
            
            <Route path="/password-recovery" component={PasswordRecovery} />
            <Route path="/register-user" component={RegisterUserForm} />
            <Route path="/perfil" component={PerfilForm} />
            <Route path="/edit-perfil" component={EditPerfilForm} />
            <Route path="/list-classes" component={ClassesList} />
        </BrowserRouter>
    )
}

export default Routes;