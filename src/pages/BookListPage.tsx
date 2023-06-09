// pages/BookListPage.tsx

import React from 'react';
import BookList from '../components/BookList';

const BookListPage: React.FC = () => {
  return (
    <div>
      <h1>Book Collection</h1>
      <BookList />
    </div>
  );
};

export default BookListPage;
