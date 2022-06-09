import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Box display="flex" width="80%">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gifs Application
          </Typography>
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                size="small"
                variant="outlined"
                placeholder="Ingrese la busqueda"
              />
            </form>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
