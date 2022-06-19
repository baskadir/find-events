import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "@mui/material";
import SliderContent from "./slider-content";

export default function Slider() {

    const [events, setEvents] = React.useState([]);

    useEffect(() => {
        getPopularEvents();
    }, []);

    const getPopularEvents = () => {
        fetch("http://localhost:3002/events?_sort=numberOfParticipant&_order=desc&_limit=3&_expand=place&_embed=images")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setEvents(data);
        });
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", mt:2 }}>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {events.map((item) => (
                <SwiperSlide key={item.id}>
                    <SliderContent event={item}></SliderContent>
                </SwiperSlide>
            ))}

        </Swiper>
        </Box>
    );
}
