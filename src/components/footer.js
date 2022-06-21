import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import footerItems from '../assets/menuItems.json';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Box
            component="footer"
            sx={{
            py: 3,
            px: 1,
            mt: 'auto',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            }}
        >
            <Container sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="body1">
                    Event App
                </Typography>
                <Box>
                {footerItems.map((item) => (
                    <Link
                        key={item.id}
                        variant="button"
                        color="text.primary"
                        onClick={()=>navigate(item.url)}
                        sx={{ my: 1, mx: 1.5, textDecoration: 'none', cursor:'pointer' }}>
                            {item.title}    
                    </Link>
                ))}
                </Box>
            </Container>
        </Box>
    )
}