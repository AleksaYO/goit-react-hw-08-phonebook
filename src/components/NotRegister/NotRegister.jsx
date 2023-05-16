import { Link } from 'react-router-dom';
import css from './notregister.module.css';

const NotRegister = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        Вы не вошли в систему или не зарегестрированы
      </h2>
      <Link className={css.link} to="/logIn">
        LogIn
      </Link>
    </div>
  );
};

export default NotRegister;
