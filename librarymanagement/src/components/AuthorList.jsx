import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">Author List</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Biography</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author, index) => (
          <tr key={index}>
            <td>{author.name}</td>
            <td>{author.birthDate}</td>
            <td>{author.biography}</td>
            <td>
              <button className="btn btn-warning m-1" onClick={() => onEdit(author)}>Edit</button>
              <button className="btn btn-danger m-1" onClick={() => onDelete(author)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AuthorList;
