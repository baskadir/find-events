import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SliderContent({event}) {

    let imageUrl = event.images.length>0 ? `url(${process.env.PUBLIC_URL}/assets/${event.images[0].name})`
    : `url(${process.env.PUBLIC_URL}/assets/default.png)`;

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                width: '100%',
                height: '100%',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: imageUrl,
            }}
        >
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
                <Box sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
                    <Box
                        sx={{
                        position: 'relative',
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {event.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {event.place.name} - {event.date}
                        </Typography>
                    </Box>
                </Box>
        </Paper>
    )
}