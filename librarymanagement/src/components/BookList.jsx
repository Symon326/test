import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">Book List</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Publication Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.publicationDate}</td>
            <td>
              <button className="btn btn-warning m-1" onClick={() => onEdit(book)}>Edit</button>
              <button className="btn btn-danger m-1" onClick={() => onDelete(book)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BookList;
