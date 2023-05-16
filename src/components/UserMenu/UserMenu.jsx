import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from '../Header/header.module.css';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.box}>
      <p className={css.name}>{name}</p>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        LogOut
      </button>
    </div>
  );
};
