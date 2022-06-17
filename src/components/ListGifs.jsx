import Masonry from "@mui/lab/Masonry";
import Gifs from "./Gifs";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

function ListGifs({ gifs }) {
  const [columns, setColumns] = useState(4);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const desktop = useMediaQuery(theme.breakpoints.down("lg"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (fullScreen) setColumns(4);
    if (desktop) setColumns(3);
    if (tablet) setColumns(2);
    if (mobile) setColumns(1);
  }, [desktop, mobile, tablet, fullScreen]);

  return (
    <Box width="90vw" margin="0 auto">
      <Masonry columns={columns} defaultColumns={columns} spacing={1}>
        {gifs.map((item) => (
          <Gifs key={item.id} gif={item} />
        ))}
      </Masonry>
    </Box>
  );
}

export default ListGifs;
