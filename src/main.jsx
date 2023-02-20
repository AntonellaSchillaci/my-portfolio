import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import MainLayout from './layouts/mainLayout';
import Skills from './routes/skills';
import Contact from './routes/contact';
import Portfolio  from './routes/portfolio';

import './index.module.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route>
        <Route path="/" element={<App />} />
           <Route path="skills" element={<Skills/>} />
           <Route path="contact" element={<Contact/>} />
           <Route path="portfolio" element={<Portfolio/>} />
      
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
