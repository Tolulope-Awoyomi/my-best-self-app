import React, { useState } from 'react';

function AffirmationDetail({ affirm, onDeleteAffirm, onUpdateAffirm }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [editedStatement, setEditedStatement] = useState(affirm.statement);

  function handleAffirmEdit() {
    fetch(`http://localhost:3000/affirmations/${affirm.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        statement: editedStatement
      }),
    })
    .then((r) => r.json())
    .then((updatedAffirm) => onUpdateAffirm(updatedAffirm))
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/affirmations/${affirm.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => onDeleteAffirm(affirm));
  }

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function handleStatementChange(e) {
    setEditedStatement(e.target.value);
  }
  
  return (
    <li>
      <input type="text" value={editedStatement} onChange={handleStatementChange} />
      <span className="category">{affirm.category}</span>
      
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="edit">Edit</option>
        <option value="delete">Delete</option>
      </select>

      {selectedOption === 'delete' && (
        <button className="remove" onClick={handleDeleteClick}>
          Delete
        </button>
      )}

      {selectedOption === 'edit' && (
        <button className="edit" onClick={handleAffirmEdit}>
          Edit
        </button>
      )}
    </li>
  );
}

export default AffirmationDetail;
