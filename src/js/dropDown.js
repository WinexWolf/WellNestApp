import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect({ label, list, mt, onChange }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    // Call the callback function passed from the parent
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box className={`${mt} bg-white-500`} sx={{ minWidth: 328 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Value"
          onChange={handleChange}
        >
          {list &&
            list.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
