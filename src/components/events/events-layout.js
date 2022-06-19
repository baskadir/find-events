import React from 'react';
import Grid from '@mui/material/Grid';
import Events from './events';
import Search from './search';

export default function EventsLayout() {
  return (
    <Grid container spacing={2} sx={{mt:2}}>
        <Grid item xs={4}>
            <Search></Search>
        </Grid>
        <Grid item xs={8}>
            <Events></Events>
        </Grid>
    </Grid>
  )
}