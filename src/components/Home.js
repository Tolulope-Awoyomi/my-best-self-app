import React from 'react';
import { Navigate } from 'react-router-dom';

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login"/>

  return (
    <>
      <div>Welcome </div>
      <div> to </div>
      <div>My Best Self</div>
    </>
  )
}

export default Home