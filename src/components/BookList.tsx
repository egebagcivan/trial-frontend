import { useEffect, useState } from 'react';
import { getBooks } from '../api/api';

interface Book {
  id: number;
  title: string;
  author: string;
  // Additional book properties
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchBooks()
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      return response.data.data as Book[]; // Access the 'books' array within the 'data' property
    } catch (error) {
      throw new Error('Failed to fetch books');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          {/* Additional book details */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
