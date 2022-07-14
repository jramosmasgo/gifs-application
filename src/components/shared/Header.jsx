import { AppBar, Grid, Toolbar, Typography, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import useSearchGifs from "../../hooks/useSearchGifs";
import { InputSearch } from "../../styles/shared/inputs";

function Header({ actionSettings }) {
  const { value, onChange, handleSubmit } = useSearchGifs("");

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar sx={{ height: 80 }}>
        <Grid container>
          <Grid item md={4}>
            <Typography fontWeight={500} variant="h5" sx={{ flexGrow: 1 }}>
              Gifs App
            </Typography>
          </Grid>
          <Grid item md={4}>
            <form onSubmit={handleSubmit}>
              <InputSearch
                onChange={onChange}
                value={value}
                size="small"
                variant="outlined"
                placeholder="Ingrese la busqueda"
              />
            </form>
          </Grid>
          <Grid item md={4} display="flex" justifyContent="flex-end">
            <IconButton onClick={() => actionSettings()}>
              <SettingsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
