import React from 'react';
import LoginForm from '../components/login/loginForm';
import styles from './login.module.css'
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage;
