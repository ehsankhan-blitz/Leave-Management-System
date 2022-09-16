import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import Calendar from 'react-calendar'
import PageContainer from '../../atoms/layouts/PageContainer';

const styles={
  calendarWrapper: css`
    padding: 100px;
  `,
  calendar: css`
    color: orange
  `
}

const CalendarItem = () => {
  return (
   <PageContainer css={styles.calendarWrapper}> 
    <Calendar css={styles.calendar}/>
    </PageContainer>
  )
}

export default CalendarItem;