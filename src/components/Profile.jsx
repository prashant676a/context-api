import React, {useContext, useState} from 'react'
import { LoginContext } from '../context/LoginContext'

function Profile() {

    const {username} = useContext(LoginContext);
  return (
    <div>
        <h1>Profile</h1>
        <h3>Hello {username}</h3>
    </div>
  )
}

export default Profile