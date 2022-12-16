import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import JobDetail from './components/pages/JobDetail'
import Dashboard from './components/pages/Dashboard'
import ListJob from './components/job-vacancy/List'
import CreateJob from './components/job-vacancy/Create'
import EditJob from './components/job-vacancy/Edit'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/job/:id" element={<JobDetail />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/dashboard/list-job-vacancy" element={<ListJob />}></Route>
                <Route path="/dashboard/list-job-vacancy/create" element={<CreateJob />}></Route>
                <Route path="/dashboard/list-job-vacancy/edit/:id" element={<EditJob />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App