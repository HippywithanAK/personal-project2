
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <h1>Welcome</h1>
      <h2>Please create an account or <Link to='/login'>login</Link></h2>
      <form>
        <textarea rows='1' cols='50' placeholder='Name'></textarea><br />
        <textarea rows='1' cols='50' placeholder='User Name'></textarea><br />
        <textarea rows='1' cols='50' placeholder='Email'></textarea><br />
        <textarea rows='1' cols='50' placeholder='Password'></textarea><br />
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Home