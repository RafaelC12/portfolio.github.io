import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/portfolio'} element={<PortfolioPage />} />
                <Route path={'/contact'} element={<ContactPage />} />
                <Route path={'*'} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router