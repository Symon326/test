import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoApp() {
  // State for managing todos
  const [todos, setTodos] = useState([]);
  // State for managing new todo input fields
  const [newTodo, setNewTodo] = useState({ taskName: '', description: '', status: 'not completed' });
  // State for managing filter option
  const [filter, setFilter] = useState('all');
  // State for tracking the index of the todo being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  // Function to add a new todo
  const handleCreateTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({ taskName: '', description: '', status: 'not completed' });
  };

  // Function to update todo status
  const handleUpdateTodoStatus = (index, newStatus) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, status: newStatus } : todo));
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Function to set the index of the todo being edited and populate input fields
  const handleEditTodo = (index) => {
    setEditIndex(index);
    setNewTodo({
      taskName: todos[index].taskName,
      description: todos[index].description,
      status: todos[index].status,
    });
  };

  // Function to save the edited todo
  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = newTodo;
    setTodos(updatedTodos);
    setEditIndex(null);
    setNewTodo({ taskName: '', description: '', status: 'not completed' });
  };

  // Function to filter todos based on status
  const filteredTodos = todos.filter((todo) => (filter === 'all' ? true : todo.status === filter));

  // Class to change the background and text color of the filter dropdown based on selected status
  const statusFilterClass =
    filter === 'not completed' ? 'bg-danger text-light' : filter === 'completed' ? 'bg-success text-white' : '';

  return (
    <div className='container mt-5'>
      {/* Application Heading */}
      <div className='row'>
        <div className='col text-center'>
          <h2>Todo Application</h2>
        </div>
      </div>
      {/* Input Fields for Adding New Todo */}
      <div className='row'>
        <div className='col-4'>
          <input
            type='text'
            className='form-control'
            name='taskName'
            placeholder='Task name'
            value={newTodo.taskName}
            onChange={handleChange}
          />
        </div>
        <div className='col-6'>
          <input
            type='text'
            className='form-control'
            name='description'
            placeholder='Description'
            value={newTodo.description}
            onChange={handleChange}
          />
        </div>
        <div className='col-2'>
          {editIndex !== null ? (
            <button className='btn btn-primary mb-3' onClick={handleSaveEdit}>
              Save Edit
            </button>
          ) : (
            <button className='btn btn-primary mb-3' onClick={handleCreateTodo} style={{ backgroundColor: 'green' }}>
              Add Todo
            </button>
          )}
        </div>
      </div>
      {/* Filter Section */}
      <div className='row mt-3 align-items-center'>
        <div className='col-8'>
          <h2>My Todos</h2>
        </div>
        <div className='col-4'>
          <div className='form-group d-flex justify-content-end align-items-center'>
            <label htmlFor='filterSelect' className='me-2'>
              Status:
            </label>
            <select
              id='filterSelect'
              className={`form-select ${statusFilterClass}`}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value='all'>All</option>
              <option value='not completed'>Not Completed</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
        </div>
      </div>
      {/* Todo Cards */}
      <div className='row'>
        {filteredTodos.map((todo, index) => (
          <div key={index} className='col-lg-4 mb-3'>
            <div className='card'>
              <div className='card-body'>
                {editIndex === index ? (
                  <>
                    <input
                      type='text'
                      className='form-control mb-2'
                      name='taskName'
                      value={newTodo.taskName}
                      onChange={handleChange}
                    />
                    <input
                      type='text'
                      className='form-control mb-2'
                      name='description'
                      value={newTodo.description}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <h6 className='card-title'>Name : {todo.taskName}</h6>
                    <p className='card-text'>Description : {todo.description}</p>
                  </>
                )}
                <div className='form-group d-flex align-items-center'>
                  <label htmlFor={`statusSelect-${index}`} className='me-2'>
                    Status:
                  </label>
                  <select
                    id={`statusSelect-${index}`}
                    className='form-select mb-0'
                    value={todo.status}
                    onChange={(e) => handleUpdateTodoStatus(index, e.target.value)}
                  >
                    <option value='not completed'>Not Completed</option>
                    <option value='completed'>Completed</option>
                  </select>
                </div>
                <div className='d-flex justify-content-end'>
                  <div className='btn-group'>
                    {editIndex === index ? (
                      <button className='btn btn-primary me-2' onClick={handleSaveEdit}>
                        Save
                      </button>
                    ) : (
                      <button className='btn btn-info me-2' onClick={() => handleEditTodo(index)}>
                        Edit
                      </button>
                    )}
                    <button className='btn btn-danger' onClick={() => handleDeleteTodo(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
