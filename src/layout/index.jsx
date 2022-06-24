import { Backdrop, CircularProgress, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Config from "../components/Config";
import Header from "../components/shared/Header";

function Layout({ children }) {
  const { value } = useSelector((state) => state.loading);

  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{ backgroundColor: "background.default" }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={value}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Drawer open={true}>
        <Config />
      </Drawer>
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
