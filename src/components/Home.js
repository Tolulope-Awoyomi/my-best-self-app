import React from 'react'

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="login"/>
  
  return (
    <div>Home</div>
  )
}

export default Home