import React from 'react'

function AffirmationDetail({statement, category}) {
  return (
    <li>
        <span className='Affirmations'>{statement}</span>
        <span className='category'>{category}</span>
    </li>
    
  )
}

export default AffirmationDetail