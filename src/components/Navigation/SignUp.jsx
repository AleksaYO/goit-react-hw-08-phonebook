import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import css from './signup.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    const { value, name } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    navigateTo('/logIn');
  };

  return (
    // <form onSubmit={onSubmit}>
    //   <label htmlFor="">
    //     Name
    //     <input onChange={onChange} type="text" name="name" value={name} />
    //   </label>
    //   <label htmlFor="">
    //     Email
    //     <input onChange={onChange} type="text" name="email" value={email} />
    //   </label>
    //   <label htmlFor="">
    //     Password
    //     <input
    //       onChange={onChange}
    //       type="text"
    //       name="password"
    //       value={password}
    //     />
    //   </label>

    //   <button type="submit">SignUp</button>
    // </form>

    <div className={css['login-box']}>
      <form onSubmit={onSubmit}>
        <div className={css['user-box']}>
          <input
            onChange={onChange}
            type="text"
            name="name"
            required=""
            value={name}
          />
          <label>Name</label>
        </div>
        <div className={css['user-box']}>
          <input
            onChange={onChange}
            type="email"
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
      <p className={css.text}>Already have account?</p>
      <Link className={css.link} to="/logIn">
        LogIn
      </Link>
    </div>
  );
};

export default SignUp;
