import React, { useEffect, useMemo, useState } from 'react'
import './style/style.scss'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {BrowserRouter} from 'react-router-dom'
import TopBar from './scenes/global/TopBar'

function App() {
  let [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <div className="app">
              <main className='content'>
                <TopBar />
              </main>
            </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;