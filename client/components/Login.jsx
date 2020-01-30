import React from 'react'

const myComponent = () => {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <h3>Please login</h3>
      <form>
        <textarea row='1' col='50' placeholder='User Name'></textarea><br />
        <textarea row='1' col='50' placeholder='password'></textarea><br />
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default myComponent