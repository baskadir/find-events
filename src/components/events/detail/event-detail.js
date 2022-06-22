import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import {useParams} from "react-router";
import DetailLeft from './detail-left';
import DetailRight from './detail-right';

export default function EventDetail() {

  const [event, setEvent] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getEvent(Number(id));
  },[id]);

  const getEvent = id => {
    fetch(`http://localhost:3002/events/${id}?_expand=place&_expand=category&_embed=images`)
      .then(res => res.json())
      .then(data => {
        setEvent(data);
      });
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2, mb:4 }}>
      <Grid item xs={8}>
        <DetailRight event={event}></DetailRight>
      </Grid>
      <Grid item xs={4}>
        <DetailLeft place={event.place} price={event.price}></DetailLeft>
      </Grid>
    </Grid>
  )
}