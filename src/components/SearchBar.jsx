import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Icon } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    // Search Bar
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      {/* Input Field in SearchBar */}
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      {/* Search Icon in SearchBar input field */}
      <IconButton type="submit" sx={{ p: "10px", color: "green" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
