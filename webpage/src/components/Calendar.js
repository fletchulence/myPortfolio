//  eachWeekOfInterval = require('date-fns/eachWeekOfInterval')

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles'
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
import DateCal from './secretComponents/DateCal';


import { StaticDatePicker } from '@mui/lab';
import { PickersDay } from '@mui/lab';
import endOfWeek from 'date-fns/endOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

export default function CustomDay() {
  const [value, setValue] = React.useState(new Date());

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }
    // ! try a useEffect to make the render less intense
    
    const start = startOfWeek(value);
    const end = endOfWeek(value);
    console.log(eachDayOfInterval(date, {start, end}))

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );














// const minDate = new Date('2020-01-01T00:00:00.000');
// const maxDate = new Date('2034-01-01T00:00:00.000');

// export default function SubComponentsPickers() {
//   const [date, setDate] = useState(new Date());

  // const getRandomNumber = (min, max) => {
  //   return Math.round(Math.random() * (max - min) + min)
  // }

  // const handleDateChange = (newDateValue) => {
  //   setDate(newDateValue)
  // }

  // const handleMonthChange = async () => {
  //   // just select random days to simulate server side based data
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
  //       resolve();
  //     }, 1000);
  //   });
  // };

  // return (
  //   <LocalizationProvider dateAdapter={AdapterDateFns}>
  //     <Grid container justifyContent="space-around">
  //       <DatePicker
  //         disableToolbar
  //         margin='normal'
  //         label='this calendar'
  //         variant='inline'
  //         value={date}
  //         onChange={handleDateChange}
  //         renderInput={(props) => <TextField {...props} margin='normal' label='Date' helperText='valid mask'/> }
  //         />
  //     </Grid>
  //     <Grid container xs={12} md={6}>
  //       <CalendarPicker 
  //         label='this calendar'
  //         value={date}
  //         onChange={handleDateChange}
  //         renderInput={(props) => <TextField {...props} margin='normal' label='Date' helperText='valid mask'/> }
  //       />
  //     </Grid>
  //     <DateCal 
  //       date={date}
  //       minDate={minDate}
  //       maxDate={maxDate}
  //       onChange={handleDateChange}
  //     />
  //   </LocalizationProvider>
  // );




}