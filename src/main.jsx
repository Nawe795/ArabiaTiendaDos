import React from 'react'
import ReactDOM from 'react-dom/client'
import { TiendaArabia } from './TiendaArabia'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <TiendaArabia />
    </React.StrictMode>
  </BrowserRouter>
)
