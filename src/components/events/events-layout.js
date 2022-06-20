import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Events from './events';
import Filters from './filters';

export default function EventsLayout() {

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [expiredEvents, setExpiredEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, [])

  const getEvents = () => {
    fetch("http://localhost:3002/events?_expand=place&_expand=category&_embed=images")
    .then(res => res.json())
    .then(data => {
      const date = Date.now();
      let eventData = [];
      let expiredEventData = [];
      data.forEach((item) => {
        Date.parse(item.date)>date ? eventData.push(item) : expiredEventData.push(item);
      })
      setEvents(eventData);
      setFilteredEvents(eventData);
      setExpiredEvents(expiredEventData);
    })
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={4}>
        <Filters events={events} filteredEvents={filteredEvents} expiredEvents={expiredEvents} setFilteredEvents={setFilteredEvents}></Filters>
      </Grid>
      <Grid item xs={8}>
        <Events events={filteredEvents}></Events>
      </Grid>
    </Grid>
  );
}
