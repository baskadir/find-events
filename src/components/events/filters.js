import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button,Box } from "@mui/material";
import { onlyUnique } from "../../helpers";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    },
  },
};

export default function Filters({events, filteredEvents, expiredEvents, setFilteredEvents}) {

  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [places, setPlaces] = useState([]);
  const [placeName, setPlaceName] = useState('');
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  
  useEffect(() => {
    getCategories();
    getPlaces();
  }, []);

  const getCategories = () => {
    fetch("http://localhost:3002/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const getPlaces = () => {
    fetch("http://localhost:3002/places")
    .then((res) => res.json())
    .then((data) => {
      let tempCities = [];
      setPlaces(data);
      data.forEach((item) => {
        tempCities.push(item.city);
      })
      setCities(tempCities);
    });
  }

  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlaceName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleClick = () => {
    filteredEvents = events;

    if(categoryName){
      filteredEvents = filteredEvents.filter(x=>x.category.name === categoryName);
    }
    if(placeName) {
      filteredEvents = filteredEvents.filter(x=>x.place.name === placeName);
    }
    if(cityName) {
      filteredEvents = filteredEvents.filter(x=>x.place.city === cityName);
    }

    setFilteredEvents(filteredEvents);
  };

  const handleExpiredEventsClick = () => {
    setFilteredEvents(expiredEvents);
  }

  return (
    <Box>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel>Kategori</InputLabel>
        <Select
          value={categoryName}
          onChange={handleCategoryChange}
          input={<OutlinedInput label="Kategoriler" />}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>Seçiniz</em>
          </MenuItem>
          {categories.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel>Mekan</InputLabel>
        <Select
          value={placeName}
          onChange={handlePlaceChange}
          input={<OutlinedInput label="Mekanlar" />}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>Seçiniz</em>
          </MenuItem>
          {places.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel>Şehir</InputLabel>
        <Select
          value={cityName}
          onChange={handleCityChange}
          input={<OutlinedInput label="Şehirler" />}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>Seçiniz</em>
          </MenuItem>
          {cities.filter(onlyUnique).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <Button variant="contained" onClick={handleClick}>
            Ara
        </Button>
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <Button variant="outlined" onClick={handleExpiredEventsClick}>
            Süresi Geçmiş Etkinlikler
        </Button>
      </FormControl>
    </Box>
  );
}
