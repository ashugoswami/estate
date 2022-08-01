import React, { useCallback, useEffect, useState } from "react";
import Dropdown from "../filter/Dropdown";
import "./filter.css";
import { Button } from "@mui/material";

const dummyData = [
  {
    label: "Location",
    options: ["US", "UK", "Japan"],
    name: "location",
  },
  {
    label: "Price",
    options: ["$500-$1000", "$1000-$2000", "$2000-$2500", "$2500-$3000"],
    name: "price",
  },
  {
    label: "Category",
    options: ["House", "Hotel", "Villa"],
    name: "category",
  },
  {
    label: "Date-Between",
    options: ["1-10", "10-20", "20-31"],
    name: "date",
  },
];
const initialValue = {
  location: "",
  price: "",
  category: "",
  date: "",
};
export default function Filter({
  originalData,
  filteredData,
  setFilteredData,
}) {
  const [filters, setFilters] = useState(initialValue);

  const handleReset = () => setFilteredData(originalData);

  const updateFilters = useCallback(() => {
    let data = originalData;
    Object.keys(filters).forEach((item) => {
      if (!filters[item]) return;
      data = data.filter((list) => list[item] === filters[item]);
    });
    setFilteredData(data);
  }, [filters, originalData, setFilteredData]);

  const handleChange = (k, v) => {
    setFilters({ ...filters, [k]: v });
  };

  useEffect(() => {
    updateFilters();
  }, [filters, updateFilters]);

  return (
    <div className="filter-dropdown-container">
      {dummyData.map((item) => (
        <Dropdown
          handleChange={handleChange}
          value={filters[item.name] || ""}
          {...item}
        />
      ))}
      {/* <div>
        <Button
          sx={{ textTransform: "none", backgroundColor: "rgb(113, 84, 243)" }}
          variant="contained"
        >
          Search
        </Button>
      </div> */}
      <div>
        <Button
          sx={{ textTransform: "none", backgroundColor: "rgb(113, 84, 243)" }}
          variant="contained"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
