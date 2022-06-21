import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import navItems from "../assets/menuItems.json";

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.grey}` }}
        >
            <Toolbar sx={{display:'flex',justifyContent:'space-around'}}>
                <Box>
                    <Typography variant="h6" color="inherit">
                        Event App
                    </Typography>
                </Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <nav>
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            variant="button"
                            color="text.primary"
                            onClick={()=>navigate(item.url)}
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', cursor:'pointer' }}>
                                {item.title}    
                        </Link>
                        ))}
                    </nav>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Giriş Yap
                    </Button>
                </Box>

            </Toolbar>
        </AppBar> 
    )
}