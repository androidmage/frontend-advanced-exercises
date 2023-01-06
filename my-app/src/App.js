import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ColorSelector from './ColorSelector';
import Container from '@mui/material/Container';
import { colorContext } from './ColorContext';
import React from "react";

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
  const [colorMap, setColorMap] = React.useState(new Map([[1, 'red'], [2, 'blue'], [3, 'yellow'], [4, 'green']]));
  
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
          <ColorSelector player={1} color='red'></ColorSelector>
          <ColorSelector player={2} color='blue'></ColorSelector>
        </Container>
        <Container sx={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <ColorSelector player={3} color='yellow'></ColorSelector>
          <ColorSelector player={4} color='green'></ColorSelector>
        </Container>
      </colorContext.Provider>
    </Container>
  );
}

export default App;
