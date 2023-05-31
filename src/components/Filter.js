import React from 'react'

function Filter({ category, onCategoryChange }) {
  return (
    <div className='Filter'>
        <select
            name="filter"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
        >
            <option value="All">Filter by category</option>
            <option value="Financial Abundance">Financial Abundance</option>
            <option value="Health">Health</option>
            <option value="Love and Relationships">Love and Relationships</option>
            <option value="Success">Success</option>
        </select>
    </div>
  )
}

export default Filter