import PhonebookList from './PhonebookList';
import Form from './Form';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

function Phonebook() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Form />
      {contacts.items.length > 0 && <Filter />}
      <PhonebookList />
    </>
  );
}

export default Phonebook;
