import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Department from './pages/Department';

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={App} />
                <Route path='/department' element={<Department />} />
            </Routes>
        </>
    )
}

export default App