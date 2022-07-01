import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarForDate.css'
const CalendarForDate = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='app  mt-20 lg:ml-[500px]'>
            <h1 className='text-center'>React Calendar</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='ml-20 text-white text-xl'>
                <span className='bold text-red-600'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
};

export default CalendarForDate;