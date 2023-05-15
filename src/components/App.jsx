import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/operations';
import { Header } from './Header/Header';
import { Phonebook } from './Phonebook/Phonebook';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Navigation/SignUp';
import { LogIn } from './Navigation/LogIn';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchAll());
  }, [isLoggedIn, dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Phonebook />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </div>
  );
};
