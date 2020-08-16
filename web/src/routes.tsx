import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeatherForm';
import Principal from './pages/Principal';
import Registered from './pages/Registered';
import ResetSent from './pages/ResetSent';
import PasswordRecovery from './pages/PasswordRecovery';
import RegisterUser from './pages/RegisterUser';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Principal} />
            <Route path="/home" exact component={Landing} />
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