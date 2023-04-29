import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import IndexPages from './pages/IndexPages'
import LoginPages from './pages/LoginPages'

function App() {
  return (
    <div>
        <Routes>
          <Route index element={<IndexPages />} />
          <Route path="/login" element={<LoginPages />} />
        </Routes>
    </div>
  );
}

export default App;