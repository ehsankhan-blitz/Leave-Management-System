import React from 'react';

/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import colors from '../styles/colors';


const styles ={
  core: css`
  padding: 12px;
  width: auto;
  border-radius: 12px;
  border: 0;
  outline: 0;
  font-family: var(--body), sans-serif;
  font-weight: var(--body_weight);
  font-size: 16px;
  line-height: 24px;
  color: ${colors.accent};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.text};
    opacity: 1; /* Firefox */
  }
  `
}

export const Input = ({value = '', }) => {
  return (
    <input
      css={css`
        ${styles.core}`}
      value={value}  
    />    
  )
}
