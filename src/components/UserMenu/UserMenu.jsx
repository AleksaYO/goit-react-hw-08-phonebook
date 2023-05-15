import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <p>{name}</p>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        LogOut
      </button>
    </>
  );
};
