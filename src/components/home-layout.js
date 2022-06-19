import React from 'react';
import Navbar from './navbar';
import {Container} from "@mui/material";
import {Outlet} from 'react-router'

export default function HomeLayout() {
  return (
    <>
        <Navbar></Navbar>
        <Container>
            <Outlet/>
        </Container>
    </>
  )
}
