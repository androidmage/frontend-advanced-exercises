import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { useColorContext } from './ColorContext';

function ColorSelector(props: { player: number, color: string }) {
  const { colors, colorMap, updateColorMapping } = useColorContext();
  const initColor: string = colorMap.get(props.player);
  const [color, setColor] = React.useState(initColor);

  const handleChange = (event: SelectChangeEvent) => {
    const newColor = event.target.value as string;
    setColor(newColor);
    updateColorMapping(props.player, newColor);
  };

  const usedColors: string[] = [...colorMap.values()];
  const menu: any[] = [];
  colors.forEach((color: string) => {
    if (!usedColors.includes(color)) {
      menu.push(<MenuItem value={color}>{color}</MenuItem>)
    }
  })
  menu.push(<MenuItem value={color}>{color}</MenuItem>);
  return (
    <Container sx={{
      width: 300,
      height: 300,
      backgroundColor: color,
    }}>
      <p>test {props.player}</p>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={handleChange}
        >
          {menu}
        </Select>
      </FormControl>

    </Container>
  );
}

export default ColorSelector;
