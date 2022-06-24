import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/slices/theme/themeSlice";

function Config() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 300 }} padding={2}>
      <Typography marginBottom={1} variant="h6" color="ButtonFace">
        Configuracion
      </Typography>
      <Divider />
      <Box marginTop={2} textAlign="center">
        <Typography marginBottom={1} color="GrayText">
          Tema
        </Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            onClick={() =>
              dispatch(changeTheme({ theme: "light", color: "green" }))
            }
          >
            Claro
          </Button>
          <Button>Sistema</Button>
          <Button>Oscuro</Button>
        </ButtonGroup>
      </Box>
      <Box marginTop={4} textAlign="center">
        <Typography color="GrayText">Color Preferencia</Typography>
        <RadioGroup row>
          <FormControlLabel
            sx={{ color: "red" }}
            value="red"
            control={<Radio color="error" />}
            label="Rojo"
          />
          <FormControlLabel
            sx={{ color: "#4ECCA3" }}
            value="green"
            control={<Radio color="primary" />}
            label="Verde"
          />
          <FormControlLabel
            sx={{ color: "silver" }}
            value="gris"
            control={<Radio color="default" />}
            label="Gris"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default Config;
