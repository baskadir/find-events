import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useNavigate} from 'react-router-dom';

export default function SearchEventList({events}) {

    const navigate = useNavigate();

    return(
        <Grid item xs={12} md={6}>
            {events.map((item)=>(
                <CardActionArea key={item.id} sx={{mb:2}} component="a" onClick={()=>navigate(`/events/${item.id}`)}>
                    <Card sx={{ display: 'flex', backgroundColor:Date.parse(item.date)>Date.now() ? '':'#dfe6e9' }}>
                        <CardContent sx={{ flex: 1, mr:3}}>
                            <Typography component="h2" variant="h5">
                            {item.title}
                            </Typography>
                            <Typography variant="subtitle1" color={Date.parse(item.date)>Date.now() ? "text.secondary":"#d63031"}>
                            {item.date} {Date.parse(item.date)>Date.now() ? '' : ' - Etkinlik süresi dolmuştur'}
                            </Typography>
                            <Typography variant="subtitle1" paragraph sx={{textAlign:'justify'}}>
                            {item.description.length<250? item.description : item.description.substring(0,250) + '...'}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                            {item.place.name} - {item.place.city}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
                            image={
                                item.images.length > 0
                                ? `${process.env.PUBLIC_URL}/assets/${item.images[0].name}`
                                : `${process.env.PUBLIC_URL}/assets/default.png`
                            }
                            alt="event image"
                        />
                    </Card>
                </CardActionArea>
            ))}
        </Grid>
    )
}