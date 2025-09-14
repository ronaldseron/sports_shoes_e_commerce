// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Category from './pages/Category';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {

    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Category />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App
