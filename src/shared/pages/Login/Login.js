/** @jsxImportSource @emotion/react */ 

import React from 'react';
import { css } from '@emotion/react';
import PageContainer from '../../atoms/layouts/PageContainer';
import Text from '../../atoms/Text'
import { Card } from '../../atoms/Card';
import colors from '../../styles/colors';



const bgUrl = "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"


const styles = {
  text: css`
    font-size: 24px;
    font-family: Poppins;
    font-weight: 600;
    margin: 0;
    color: #FFA115;
    padding: 40px;
  `,
  wrapper: css`
    background-image: url("${bgUrl}");
    height: 100vh;
  `,
  card: css`
    position:absolute;
    top:0;
    right:0;
    height: 100%;
    border-radius: 44px 0 0  44px;
    width: 30%;
    box-shadow:-5px 0px 21px -1px rgba(245,188,54,1);
  `,
  loginForm: css`
    padding: 100px 20px;
    display: flex;
    flex-direction:column;
    gap:20px;
  `,
  formText: css`
    font-size: 24px;
    font-family: Poppins;
    font-weight: 600;
    margin: 0;
    color: #FFA115;

  `,
  input: css`
    border-color: #FFA115;
    padding: 12px 8px; 
    border-radius: 8px;
    outline: none;
    border: 1px solid #FFA115;
  `,
  btn: css`
    padding: 20px 14px;
    background-color: #FFA115;
    color: ${colors.card};
    font-size: 18px;
    border:none;
    border-radius: 8px;
    cursor:pointer;
  `
}

const LoginForm = () => {
  const [name, setName] =React.useState('');
  const [password, setPassword] = React.useState('');

  const handleButtonSubmit = () => {
    console.log(name,password);
  }

  return (
    <div css={styles.loginForm}>
      <div>  
        <p css={styles.formText}>LOGIN</p>
        <p css={css`${styles.formText}; font-weight: 300; font-size: 12px`}>Welcome Abroad</p>
      </div>
      <input css={styles.input} value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)} type={"text"}></input>
      <input css={styles.input} password={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)} type={"password"}></input>
      <button onClick={handleButtonSubmit} css={styles.btn}>Login</button>
    </div>
  );
};


const Login = () => {
  return (
    <PageContainer css={styles.wrapper}>
      <p css={styles.text}>Login</p>
      <Card css={styles.card}><LoginForm/></Card>
    </PageContainer>
  ) 
}

export default Login;
