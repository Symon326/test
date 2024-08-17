import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
    setEditingBook(null); // Reset editing state
  };

  const handleEditBook = (book) => {
    setBooks(books.map(b => (b.isbn === book.isbn ? book : b)));
    setEditingBook(null); // Reset editing state
  };

  const handleDeleteBook = (book) => {
    setBooks(books.filter(b => b.isbn !== book.isbn));
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  return (
    <div>
      <h2 className="text-center mt-4">Book Management</h2>
      <BookForm 
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }} 
        onSubmit={editingBook ? handleEditBook : handleAddBook} 
        key={editingBook ? editingBook.isbn : null} // Re-render form when editing
      />
      <BookList books={books} onEdit={handleEditClick} onDelete={handleDeleteBook} />
    </div>
  );
};

export default BookManagement;
