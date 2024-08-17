import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const AuthorManagement = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const handleEditAuthor = (author) => {
    setAuthors(authors.map(a => (a.name === author.name ? author : a)));
    setEditingAuthor(null); // Reset editing state after saving
  };

  const handleDeleteAuthor = (author) => {
    setAuthors(authors.filter(a => a.name !== author.name));
  };

  return (
    <div>
      <h2 className="text-center mt-4">Author Management</h2>
      <AuthorForm 
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }} 
        onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor} 
        key={editingAuthor ? editingAuthor.name : null} // Re-render form when editing
      />
      <AuthorList authors={authors} onEdit={setEditingAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default AuthorManagement;
