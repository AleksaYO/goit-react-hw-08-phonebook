import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

export const LogIn = () => {
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
    <form onSubmit={onSubmit}>
      <label htmlFor="">
        Email
        <input onChange={onChange} type="text" name="email" value={email} />
      </label>
      <label htmlFor="">
        Password
        <input
          onChange={onChange}
          type="text"
          name="password"
          value={password}
        />
      </label>

      <button type="submit">LogIn</button>
    </form>
  );
};
