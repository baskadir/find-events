import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField } from '@mui/material';

export default function SearchBar({events,setEvents}) {

  const [searchValue, setSearchValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [finishDate, setFinishDate] = useState('');

  const getEvents = (searchQuery,start, finish) => {
    let url = `http://localhost:3002/events?q=${searchQuery}&_expand=place&_expand=category&_embed=images`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      let filteredEvents = data;
      if(startDate){
        filteredEvents = filteredEvents.filter(x=>Date.parse(x.date) > Date.parse(start));
      }
      if(finishDate) {
        filteredEvents = filteredEvents.filter(x=>Date.parse(x.date) < Date.parse(finish));
      }
      setEvents(filteredEvents);
    })
  }

  const onInputChange = e => {
    setSearchValue(e.target.value);
  }

  const handleClick = e => {
    getEvents(searchValue,startDate,finishDate);
  }

  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'center', my:4}}>
      <Box className='search-area' sx={{display:'flex'}}>
        <Box
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 480 }}
        >
          <TextField
            sx={{ ml: 1, flex: 1}}
            placeholder="Etkinlik Ara"
            value={searchValue}
            variant="outlined"
            onChange={onInputChange}
          />

        </Box>
        <Box sx={{p: '2px 4px'}} className='search-area-date'>
          <TextField
            id="startDate"
            type="date"
            value={startDate}
            label="Başlangıç Tarihi"
            onChange={(e) => setStartDate(e.target.value)}
            sx={{ width: 240 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField 
            id="finishDate"
            type="date"
            value={finishDate}
            label="Bitiş Tarihi"
            onChange={(e) => setFinishDate(e.target.value)}
            sx={{ width: 240, mx:1 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button sx={{height:'100%'}} color='info' variant="contained" onClick={handleClick} startIcon={<SearchIcon />}>
            Ara
          </Button>
        </Box>
      </Box>
      
    </Box>
  )
}