import React from 'react';
import { Navigate } from 'react-router-dom';

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login"/>

  return (
    <div>Home</div>
  )
}

export default Home