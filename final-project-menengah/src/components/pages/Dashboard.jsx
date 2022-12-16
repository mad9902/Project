import React from 'react'
import Sidebar from '../layouts/Sidebar'
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
    return (
        <Sidebar>
            <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">Welcome to Dashboard</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni optio fugit soluta veritatis voluptatibus officia molestias.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                    Ipsam quibusdam earum, voluptate atque. Animi tenetur eius accusamus accusantium aspernatur laboriosam sunt!
                </p>
                <NavLink to="/dashboard/list-job-vacancy" className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Job Lists
                </NavLink>
            </div>
        </Sidebar>
    )
}
