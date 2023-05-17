import PhonebookList from './PhonebookList';
import Form from './Form';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import css from './Phonebook.module.css';

function Phonebook() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.wrapper}>
      <Form />
      {contacts.items.length > 0 && (
        <div>
          <Filter />
          <PhonebookList />
        </div>
      )}
    </div>
  );
}

export default Phonebook;
