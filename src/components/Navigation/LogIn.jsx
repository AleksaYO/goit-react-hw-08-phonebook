import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import css from './LogIn.module.css';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    const { value, name } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    navigateTo('/');
  };

  return (
    <>
      <div className={css['login-box']}>
        <form onSubmit={onSubmit}>
          <div className={css['user-box']}>
            <input
              onChange={onChange}
              type="text"
              name="email"
              required=""
              value={email}
              autoComplete="off"
            />
            <label>Email</label>
          </div>
          <div className={css['user-box']}>
            <input
              onChange={onChange}
              type="password"
              name="password"
              required=""
              value={password}
            />
            <label>Password</label>
          </div>
          <center>
            <button type="submit" className={css.btn}>
              SUBMIT
            </button>
          </center>
        </form>
        <p className={css.info}>No account? </p>
        <Link className={css.link} to="/signUp">
          SignUp
        </Link>
      </div>
    </>
  );
};

export default LogIn;
