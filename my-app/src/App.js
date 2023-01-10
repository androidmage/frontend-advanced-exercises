import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ColorSelector from './components/colorSelector/ColorSelector';
import Container from '@mui/material/Container';
import { colorContext } from './context/ColorContext';
import React from "react";

function App() {
  const colors = ['No color', 'red', 'blue', 'green', 'yellow', 'purple', 'orange']
  const [colorMap, setColorMap] = React.useState(new Map([[1, 'No color'], [2, 'No color'], [3, 'No color'], [4, 'No color']]));
  
  const updateColorMapping = (key, color) => {
    const updatedColorMap = new Map(colorMap);
    updatedColorMap.set(key, color);
    setColorMap(updatedColorMap);
  }

  return (
    <Container className='App'>
      <h1>Game Lobby</h1>
      <colorContext.Provider value={{colors, colorMap, updateColorMapping}}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <ColorSelector player={1}></ColorSelector>
          <ColorSelector player={2}></ColorSelector>
        </Container>
        <Container sx={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <ColorSelector player={3}></ColorSelector>
          <ColorSelector player={4}></ColorSelector>
        </Container>
      </colorContext.Provider>
    </Container>
  );
}

export default App;
