import React from 'react';
import { Navigate } from 'react-router-dom'; // v5 -> Redirect

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login"/> // v5 -> <Redirect to="/login"/>

  return (
    <>
      <div className='HomePage'> 
        <div> Welcome </div>
        <div> to </div>
        <div>My Best Self</div> 
      </div>
    </>
  )
  }

export default Home