import React from 'react';
import {Box, Card, Chip, Tooltip} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareButton from 'react-social-share-buttons';
import { useNavigate } from 'react-router-dom';

export default function DetailLeft({place, price}) {

    const navigate = useNavigate();

    const handleClick = e => {
        navigate(`/places/${place.id}/events`)
    };

    let postUrl = document.location.href;
    let postTitle = "Merhaba herkese, sizinle ilgimi çeken bir etkinliği paylaşıyorum: ";

    return (
        <Box>
            <Box sx={{display:'flex', justifyContent:'space-between', mb:3, mt:'60px'}}>
                <Tooltip title={place ? place.name : ''} arrow placement="top">
                    <Chip sx={{maxWidth:'50%',textOverflow:'ellipsis'}} label={place?.name} color="info" variant="outlined" onClick={handleClick} ></Chip>
                </Tooltip>
                <Chip label={place?.city} color="success" variant="outlined" />
            </Box>
            <Box sx={{textAlign:'center'}}>
                <iframe src={place?.addressSrc} title="event" style={{border:0,width:'100%', height:'300px'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>

            <Box sx={{mt:2}}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Bilet Fiyatları
                        </Typography>
                        <br />
                        <Typography variant="h6" color={(price && price!==0) ? '#ff9f1a' : '#ff3838'}>
                            {(price && price!==0) ?  price + " TL" : "Ücretsiz" }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Rezervasyon İçin Tıklayınız</Button>
                    </CardActions>
                </Card>
            </Box>
            <Typography sx={{my:2, textAlign:'center'}} variant="h5" component="div">
                    Paylaş
            </Typography>     
            <Box sx={{display:'flex', justifyContent:'space-around'}}>  
                <ShareButton
                    compact
                    socialMedia={'facebook'}
                    url={postUrl}
                    text={postTitle}
                />
                <ShareButton
                    compact
                    socialMedia={'twitter'}
                    url={postUrl}
                    text={postTitle}
                />
                <ShareButton
                    compact
                    socialMedia={'pinterest'}
                    url={postUrl}
                    text={postTitle}
                />
            </Box>
        </Box>
    )
}