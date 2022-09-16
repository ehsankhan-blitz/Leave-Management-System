/** @jsxImportSource @emotion/react */ 

import React from 'react';
import { css } from '@emotion/react';
import colors from '../styles/colors';

const styles ={
  card: css`
    max-width: 100%;
    max-height: 100%;
    background-color: ${colors.card};
  `
}

export const Card = ({children, height='100px', width='100px', ...props}) => {
  return <div css={css`${styles.card} height: ${height}; width: ${width};`}{...props}> {children} </div>
}
