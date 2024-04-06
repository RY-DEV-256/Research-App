import React from 'react'
import styles from './loginForm.module.css'
const LoginForm = () => {
  return (
    <div className={styles.container} >
      <form action="" method="post" className={styles.form}>
        <h5 className="text-center">Admin Login</h5>
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="username" id="username" className="form-control mb-3" required/>
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name="password" id="password" className="form-control mb-3" required/>
        <button type="submit" className="form-control btn btn-success">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
