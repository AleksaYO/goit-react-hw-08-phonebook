import { filteredContacts } from 'redux/slice';
import { useDispatch } from 'react-redux';
import css from './filter.module.css';

function Filter({ filter }) {
  const dispatch = useDispatch();
  return (
    // <div className={css.filter}>
    //   <h2>Contacts</h2>
    //   <label className={css.label} htmlFor="">
    //     Find contacts by name
    //     <input
    //       className={css.input}
    //       onInput={e => dispatch(filteredContacts(e.target.value))}
    //       name="text"
    //       type="text"
    //       value={filter}
    //     />
    //   </label>
    // </div>
    <div className={css['form__group']}>
      <input
        onInput={e => dispatch(filteredContacts(e.target.value))}
        className={css['form__field']}
        name="name"
        type="text"
        placeholder="Search by name"
        required=""
        value={filter}
      />
    </div>
  );
}

export default Filter;
