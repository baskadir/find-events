import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Search() {

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState([]);

    useEffect(() => {
        getCategories();
    },[]);

    const getCategories = () => {
        fetch("http://localhost:3002/categories")
        .then(res=>res.json())
        .then(data=>{
            setCategories(data);
        })
    }

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setCategoryName(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleClick = () => {
        console.log(categoryName);
    }

    return (
        <FormControl sx={{ m: 1, width: '100%' }} size="small">
            <InputLabel>Kategori</InputLabel>
            <Select
            id="category-name"
            multiple
            value={categoryName}
            onChange={handleChange}
            input={<OutlinedInput label="Kategoriler" />}
            MenuProps={MenuProps}
            >
                {categories.map((item) => (
                    <MenuItem
                    key={item.id}
                    value={item.name}
                    >
                    {item.name}
                    </MenuItem>
                ))}
            </Select>
            <Button sx={{mt:3}} variant="contained" onClick={handleClick}>Ara</Button>
        </FormControl>
    )
}

