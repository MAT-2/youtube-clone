import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  // Creating objects so item feed is organized in columns using flexDirection
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* using sx prop from MUI for height styling and positioning */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        {/* Using sx prop from MUI for styling */}
        <Typography
          className="copyright"
          variant="body2"
          // margin top 1.5
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2024 Pixel Pulse
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
