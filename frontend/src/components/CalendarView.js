// src/components/CalendarView.js
import React, { useState } from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { Paper } from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const CalendarView = ({ events }) => {
    const [view, setView] = useState(Views.MONTH);

    return (
        <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#fff' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 400 }}
                onView={setView}
                view={view}
            />
        </Paper>
    );
};

export default CalendarView;
