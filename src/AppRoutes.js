import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages/Index';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Index />} />
        </Routes>
    )
}