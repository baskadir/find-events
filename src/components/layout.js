import React from 'react';
import Navbar from './navbar';
import {Container} from "@mui/material";
import {Outlet} from 'react-router'
import Footer from './footer';

export default function Layout() {
  return (
    <>
        <Navbar></Navbar>
        <Container>
            <Outlet/>
        </Container>
        <Footer></Footer>
    </>
  )
}
