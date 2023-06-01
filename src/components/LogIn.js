import React from 'react'

function LogIn({ isLoggedIn }) {
    if (!isLoggedIn) return <Redirect to="login"/>
    
  return (
    <div>LogIn</div>
  )
}

export default LogIn