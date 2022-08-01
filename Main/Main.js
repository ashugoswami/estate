import React, { useState } from "react";
import "./Main.css";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "../filter/Filter";
import CardContainer from "../CardContainer";

import { Container } from "@mui/material";
import { dummyDataList } from "../../utils/data";

export default function Main() {
  const [filteredData, setFilteredData] = useState(dummyDataList);
  return (
    <div className="main">
      <Container
        sx={{
          py: "30px",
          textAlign: "start",
        }}
      >
        <div className="main-component">
          <div className="main-heading">
            <h3>Search Properties to rent</h3>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search with Search Bar" />
            <SearchIcon sx={{ position: "relative", right: "37px" }} />
          </div>
        </div>
        <Filter
          originalData={dummyDataList}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
        <CardContainer data={filteredData} />
      </Container>
    </div>
  );
}
