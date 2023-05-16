import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.header}>
      <Link to="/" className={css.title}>
        Phonebook
      </Link>
      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default Header;
