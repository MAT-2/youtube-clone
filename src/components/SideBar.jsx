import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

const SideBar = () => (
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
        style={{
          background: category.name === selectedCategory && "#16c925",
          color: "black",
        }}
        key={category.name}
      >
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
