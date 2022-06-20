import { Box } from '@mui/material';
import React, {useState} from 'react';
import Slider from './slider';
import SearchBar from './search-bar';
import SearchEventList from './search-event-list';

export default function Home() {

  const [events, setEvents] = useState([]);

  return (
    <>
        <Box sx={{height:'100%'}}>
          <Slider></Slider>
          <SearchBar events={events} setEvents={setEvents}></SearchBar>
          <SearchEventList events={events}></SearchEventList>
        </Box>
    </>
  )
}