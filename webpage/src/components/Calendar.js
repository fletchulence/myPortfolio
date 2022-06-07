import React, { useState, useEffect } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { 
  LocalizationProvider,
  CalendarPicker,
  MonthPicker,
  DatePicker,
  YearPicker,
} from '@mui/lab';
import { 
  TextField, 
  Grid,
  Badge,
  Container,
  Paper,
  Card,
} from '@mui/material';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

export default function SubComponentsPickers() {
  const [date, setDate] = useState(new Date());

  const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  const handleDateChange = (newDateValue) => {
    setDate(newDateValue)
  }

  // const handleMonthChange = async () => {
  //   // just select random days to simulate server side based data
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
  //       resolve();
  //     }, 1000);
  //   });
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container justifyContent="space-around">
        <DatePicker
          disableToolbar
          margin='normal'
          label='this calendar'
          variant='inline'
          value={date}
          onChange={handleDateChange}
          renderInput={(props) => <TextField {...props} margin='normal' label='Date' helperText='valid mask'/> }
          />
      </Grid>
      <Grid container xs={12} md={6}>
        <CalendarPicker 
          label='this calendar'
          value={date}
          onChange={handleDateChange}
          renderInput={(props) => <TextField {...props} margin='normal' label='Date' helperText='valid mask'/> }
        />
      </Grid>
      <Container>im here
        <Grid container spacing={0}>
          <Grid item>
            <Paper>a;lskdjf</Paper>
          </Grid>
          <Paper>
            helloooo
          </Paper>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
}