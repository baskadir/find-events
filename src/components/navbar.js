import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const navItems = ['Anasayfa', 'Etkinlikler', 'İletişim'];

export default function Navbar() {
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
                            key={item}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}>
                                {item}
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