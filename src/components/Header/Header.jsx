import { Navigation } from 'components/Navigation/Navigation';
import { SignUp } from 'components/Navigation/SignUp';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h1>Phonebook</h1>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <NavLink to="/signUp">SignUp</NavLink>
          <NavLink to="/logIn">LogIn</NavLink>
        </>
      )}
    </div>
  );
};
