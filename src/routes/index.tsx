import React from 'react';

import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';
import HomePatient from '../pages/HomePatient';

import FormStep1 from '../pages/Form/FormStep1/index';
import FormStep2 from '../pages/Form/FormStep2/index';
import FormStep3 from '../pages/Form/FormStep3/index';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/home" component={HomePatient} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />

    <Route path="/step1" component={FormStep1} isPrivate />
    <Route path="/step2" component={FormStep2} isPrivate />
    <Route path="/step3" component={FormStep3} isPrivate />
  </Switch>
);

export default Routes;
