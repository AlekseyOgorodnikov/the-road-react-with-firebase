import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../../constant/routes';

import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/LandingPage';
import SignUpPage from '../SignUp/SignUpPage';
import SignInPage from '../SignIn/SignInPage';
import PasswordForgetPage from '../PasswordForget/PasswordForgetPage';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account/AccountPage';
import AdminPage from '../Admin/AdminPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
};

export default App;
