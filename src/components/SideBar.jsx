import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      // medium devices to 95% height size
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* Adding categories to SideBar, and styling as well */}
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#16c925",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "#16c925",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
