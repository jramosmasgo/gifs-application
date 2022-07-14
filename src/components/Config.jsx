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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/theme/themeSlice";

const buttonsTheme = [
  {
    name: "dark",
    active: false,
  },
  {
    name: "light",
    active: false,
  },
  {
    name: "system",
    active: true,
  },
];

const colorsTheme = [
  {
    name: "red",
    active: false,
  },
  {
    name: "green",
    active: true,
  },
  {
    name: "grey",
    active: false,
  },
];

function Config() {
  const themeValues = useSelector((state) => state.theme.value);
  const [buttons, setButtons] = useState(buttonsTheme);
  const dispatch = useDispatch();

  const handleChangeTheme = (nameTheme) => {
    const result = buttonsTheme.map((x) =>
      x.name !== nameTheme ? { ...x, active: false } : { ...x, active: true }
    );
    setButtons(result);
    dispatch(changeTheme({ theme: nameTheme, color: themeValues.colorName }));
  };

  const handleChangeColor = ({ target }) => {
    dispatch(
      changeTheme({ theme: themeValues.themeName, color: target.value })
    );
  };

  return (
    <Box sx={{ width: 300 }} padding={2}>
      <Typography marginBottom={1} variant="h6">
        Configuracion
      </Typography>
      <Divider />
      <Box marginTop={2} textAlign="center">
        <Typography marginBottom={1} color="GrayText">
          Tema
        </Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {buttons.map((btn) => (
            <Button
              key={btn.name}
              variant={btn.active ? "contained" : "outlined"}
              onClick={() => handleChangeTheme(btn.name)}
            >
              {btn.name}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box marginTop={4} textAlign="center">
        <Typography color="GrayText">Color Preferencia</Typography>
        <RadioGroup row onChange={handleChangeColor}>
          {colorsTheme.map((color) => (
            <FormControlLabel
              key={color.name}
              value={color.name}
              control={<Radio />}
              label={color.name}
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default Config;
