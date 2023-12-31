import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  label,
  list,
  mt,
  onChange,
  bgColor,
  txtColor,
}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    // Call the callback function passed from the parent
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box className={`${mt} bg-${bgColor}-500`} sx={{ minWidth: 328 }}>
      <FormControl fullWidth>
        {value ? null : ( // Conditionally render the label if value is not selected
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: `${txtColor}`, // Set the text color to white
              // Add other styling properties if needed
            }}
          >
            {label}
          </InputLabel>
        )}
        <Select
          sx={{
            color: `${txtColor}`, // Set the text color to white
            // Add other styling properties if needed
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Value"
          onChange={(event) => {
            handleChange(event);
            onChange(event); // Add this line to trigger the parent's onChange
          }}
        >
          {list &&
            list.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
