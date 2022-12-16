import React, { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs()
    }, [])

    const getJobs = async () => {
        try {
            const { data } = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            setJobs(data.data)
        } catch (err) {
            return err
        }
    }

    return (
        <Layout>
            {/* JUMBOTRON */}
            <div className="p-6 bg-gray-50 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">Explore Jobs</h2>
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

            {/* EXPLORE JOBS */}
            <div className="container py-5 xl:px-14 sm:py-3 sm:px-2">
                <div className="jobs grid grid-cols-6 gap-4">
                    {
                        jobs != null && jobs.length !== 0 && jobs.map((job, index) => (
                            <div className="shadow p-3" key={job.id}>
                                <div className="flex justify-center">
                                    <img src={job.company_image_url} alt={job.company_name} className="w-32 rounded drop-shadow-md" />
                                </div>
                                <h2 className='text-1xl font-bold'>{job.title}</h2>
                                <span className='block text-slate-400'>{job.company_name}</span>
                                <span className='block'>{`${job.job_type} - ${job.job_tenure}`}</span>

                                <br />
                                <NavLink to={`/job/${job.id}`} className="py-2 px-10 rounded-md bg-yellow-200 text-white">Lihat</NavLink>
                            </div>
                        ))}
                    {
                        jobs === null && (
                            <>

                                {jobs === null ? '' :
                                    <p>Tidak ada data</p>
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}
