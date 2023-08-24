import React, { useEffect, useMemo, useState } from 'react'
import './style/style.scss'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopBar from './scenes/global/TopBar'
import Dashboard from './scenes/dashboard';
import SideBar from './scenes/global/SideBar';
import Team from './scenes/team';
// import Invoives from './scenes/invoives';
import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';

function App() {
  let [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBar />
            <main className='content'>
              <TopBar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                {/* 
                  <Route path='/invoives' element={<Invoives />} />
                  <Route path='/bar' element={<Bar />} />
                  <Route path='/form' element={<Form />} />
                  <Route path='/line' element={<Line />} />
                  <Route path='/pie' element={<Pie />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path='/geography' element={<Geography />} />
                  <Route path='/calendar' element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;