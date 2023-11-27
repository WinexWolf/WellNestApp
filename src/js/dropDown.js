import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="mt-6" sx={{ minWidth: 328 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select the Avatar to chat with</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Darth Vader</MenuItem>
          <MenuItem value={20}>Tom Hanks</MenuItem>
          <MenuItem value={30}>Beyonce</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}