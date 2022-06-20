import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Events({events}) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {events.map((item) => (
        <Card
          sx={{
            maxWidth: 345,
            mb: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          key={item.id}
        >
          <Box>
            <CardMedia
              component="img"
              height="150"
              image={
                item.images.length > 0
                  ? `${process.env.PUBLIC_URL}/assets/${item.images[0].name}`
                  : `${process.env.PUBLIC_URL}/assets/default.png`
              }
              alt="event image"
            />
            <CardContent
              sx={{
                minWidth: 320,
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ p: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="body2" color="text.secondary">
                {item.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.place.city}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {item.category.name}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
