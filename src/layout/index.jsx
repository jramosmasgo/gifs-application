import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ListGifs from "../components/ListGifs";
import Header from "../components/shared/Header";

function Layout({ children }) {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{ backgroundColor: "background.default" }}
    >
      <Header />
      {children}
    </Box>
  );
}

export default Layout;