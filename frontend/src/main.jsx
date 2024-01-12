import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { SnackbarProvider } from 'notistack'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SnackbarProvider>
    <App />
    </SnackbarProvider>
  </BrowserRouter>,
)
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);