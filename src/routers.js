import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
            </Routes>
        </BrowserRouter>
    )

}
