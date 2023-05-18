import React, { useState } from 'react';


//this function is to allow for users to state their favourite books and showcase them in the website
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBooks, SetNewBooks] = useState('');

  const addBook = () => {
    setBooks([...books, { kirja: newBooks, completed: false }]);
    SetNewBooks('');
  };


  return (
    <div>
      <h1>Kerro meille lempikirjasi!</h1>
      <input
        type="text"
        value={newBooks}
        onChange={(e) => SetNewBooks(e.target.value)}
      />
      <button onClick={addBook}>Lisää kirja</button>
      <ul>

    {books.map((task, index) => (
      <li
        key={index}
      >
        {task.kirja}
      </li>
    ))}
  </ul>
</div>
);
};

export default BookList;