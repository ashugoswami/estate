import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({
  label,
  value = "",
  name,
  handleChange,
  options,
}) {
  // const [Location, setLocation] = React.useState("");

  // const handleChange = (event) => {
  //   setLocation(event.target.value);
  // };

  return (
    <FormControl size="small" fullWidth className="filter-dropdown">
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={label}
        value={value}
        label={label}
        onChange={(e) => handleChange(name, e.target.value)}
      >
        {options.map((item) => (
          <MenuItem value={item} key={item} sx={{ fontSize: "14px" }}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
