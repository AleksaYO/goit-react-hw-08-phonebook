import css from './phonebookList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchDelete } from 'redux/operations';

function PhonebookList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const newArr = contacts.items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts.isLoading && <p>Loading...</p>}
      <ul className={css.list}>
        {newArr.map(({ name, number, id }) => {
          return (
            <li className={css.card} id={id} key={id}>
              <p className={css.name}>{name}:</p>
              <p className={css.number}>{number}</p>
              <button
                className={css['delete-button']}
                onClick={() => dispatch(fetchDelete(id))}
              >
                <p className={css['btn-text']}>Del</p>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PhonebookList;
