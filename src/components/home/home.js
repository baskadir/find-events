import { Box } from '@mui/material';
import React from 'react';
import Slider from './slider';
import SearchBar from './search-bar';

export default function Home() {
  return (
    <>
        <Box sx={{height:'100%'}}>
          <Slider></Slider>
          <SearchBar></SearchBar>
        </Box>
    </>
  )
}