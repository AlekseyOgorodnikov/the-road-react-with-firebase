import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constant/routes';

const SignUpPage = () => {
  return (
    <>
      <h1>SignUp Page</h1>

      <SignUpForm />
    </>
  );
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });

        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Полное имя"
        />

        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Электронная почта"
        />

        <input
          type="password"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          placeholder="Пароль"
        />

        <input
          type="password"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          placeholder="Повторите пароль"
        />

        <button type="submit" disabled={isInvalid}>
          Зарегистрироваться
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => {
  return (
    <>
      <p>
        Нет учетной записи? <Link to={ROUTES.SIGN_UP}>Зарегистрироваться</Link>
      </p>
      ;
    </>
  );
};

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
