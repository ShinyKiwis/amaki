import React from 'react'
import {useState} from "react"
import "./Login.css"

const Login = ({setAuth}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const changeUsername = (e) => {
    setUsername(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const authenticate = () => {
    setAuth(username === "user" && password === "amaki")
  }
  return (
    <div className="body">
        <img id='amakilogo' src="/images/image.png" alt='icon'></img>
        <div className='login'>
          <img id='user' src="/images/userlogo.png" alt='logo'></img>
          <h1>Login</h1>
          <div className='username'>
              <p>Username</p>
              <img id='userlogo' src="/images/usericon.png" alt='user'></img>
              <input type="text" id='usernamebox' onChange={e => {changeUsername(e)}}/>
          </div>
          <div className='password'>
              <p>Password</p>
              <img id='passlogo' src="/images/passicon.png" alt='pass'></img>
              <input type="password" id='passnamebox' onChange={e => {changePassword(e)}} />
          </div>
          <button className='button' onClick={authenticate}>Sign in</button>
        </div>
    </div> 
  )
}

export default Login
