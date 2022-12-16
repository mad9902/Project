import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ManageData from './components/ManageData'

function App(props) {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/manage-data" element={<ManageData />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
