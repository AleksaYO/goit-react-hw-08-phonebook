import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchDelete } from 'redux/operations';

export function PhonebookList() {
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
            <li id={id} key={id}>
              {name}: {number}
              <button onClick={() => dispatch(fetchDelete(id))}>Удалить</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
