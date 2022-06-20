import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

export default function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  const onInputChange = e => {
    setSearchValue(e.target.value);
  }

  const handleClick = e => {
    console.log(searchValue);
  }

  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:4}}>
      <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, backgroundColor: '#2980b9' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color:'white'}}
          placeholder="Etkinlik Ara"
          inputProps={{ 'aria-label': 'input' }}
          onChange={onInputChange}
        />
        <Divider sx={{ height: 28, m: 0.5, backgroundColor: 'white' }} orientation="vertical" />
        <IconButton sx={{ p: '10px', color: 'white' }} aria-label="search" onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}