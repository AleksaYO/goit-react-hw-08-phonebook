import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import Loader from './Loader/Loader';

const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'));
const NotRegister = lazy(() => import('../components/NotRegister/NotRegister'));
const SignUp = lazy(() => import('../components/Navigation/SignUp'));
const LogIn = lazy(() => import('../components/Navigation/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    isLoggedIn && dispatch(fetchAll());
    dispatch(refreshUser());
  }, [isLoggedIn, dispatch]);

  return (
    <div>
      {isRefresh ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={isLoggedIn ? <Phonebook /> : <NotRegister />}
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};
