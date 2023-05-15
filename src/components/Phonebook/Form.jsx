import { useState } from 'react';
import { fetchAll, fetchCreate } from 'redux/operations';
import { useDispatch } from 'react-redux';
import css from './Phonebook.module.css';

export function Form({ UpdateContacs }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(fetchCreate({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          onInput={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor="">
        Number
        <input
          onInput={onChange}
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button onClick={fetchAll()} className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}
