import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const SignUp = () => {
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
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">
        Name
        <input onChange={onChange} type="text" name="name" value={name} />
      </label>
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

      <button type="submit">SignUp</button>
    </form>
  );
};
