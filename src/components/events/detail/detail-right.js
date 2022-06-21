import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function DetailRight({event}) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, textAlign:'center' }}>
        {event?.title}
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        {event?.images?.length > 0 ? (
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="detail-swiper"
          >
            {event.images.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={`${process.env.PUBLIC_URL}/assets/${item.name}`} alt="event"></img>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Box sx={{border:'1px solid #d1d8e0', p:3}}>
            <img src={`${process.env.PUBLIC_URL}/assets/default.png`} alt="default"/>
          </Box>
        )}
      </Box>
      <Box sx={{p:3, textAlign: 'justify'}}>
        <Box sx={{mb:2}}>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
          <Chip label={event?.category?.name} variant="outlined" color="info" />
          <Chip label={event?.date} color="success" variant="outlined" />
        </Box>
        <Typography variant="p">{event?.description}</Typography> 
      </Box>
    </Box>
  );
}
