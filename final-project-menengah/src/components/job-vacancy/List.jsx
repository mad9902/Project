import React, { useState, useEffect } from 'react'
import Sidebar from '../layouts/Sidebar'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export default function List() {
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

    const deleteJob = async (jobId) => {
        try {
            await axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${jobId}`, {
                headers: {
                    'Authorization': `token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjY4MTczNTQ0LCJleHAiOjE2Njg3NzgzNDQsIm5iZiI6MTY2ODE3MzU0NCwianRpIjoiZWFKZDJKTmdUVUgzdUVLZCIsInN1YiI6Nzc4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.1bKlYXH7YCCpz_sKES0bXgPbCf0LpYuQmEFt3beMYjo`
                }
            })
            getJobs()
        } catch (err) {
            return err
        }
    }

    return (
        <Sidebar>
            <h2 className="font-bold text-2xl mb-5">Manage Data</h2>
            <NavLink to="/dashboard/list-job-vacancy/create" className="py-2 px-10 my-5 rounded-md bg-blue-600 text-white">Create Job</NavLink>
            <br />
            <br />
            <div className="overflow-x-auto shadow-md sm:rounded-lg mb-12">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                    <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                #
                            </th>
                            <th scope="col" className="py-3 px-6 w-20">
                                Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Job Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Qualification
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Company Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Salary Min
                            </th>
                            <th scope="col" className="py-3 px-6 w-36">
                                Salary Max
                            </th>
                            <th scope="col" className="py-3 px-6 w-36">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs != null && jobs.length !== 0 && jobs.map((job, index) => {
                                return (
                                    <tr key={job.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </th>
                                        <td className='py-4 px-6'>
                                            <img src={job.company_image_url} alt={job.company_name} className="w-full" />
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="block font-bold">{job.title}</span>
                                            <span className="block my-2">{job.job_type}</span>
                                            <span>{job.job_tenure}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            {job.job_description}
                                        </td>
                                        <td className="py-4 px-6">
                                            {job.job_qualification}
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="block font-bold">{job.company_name}</span>
                                            <span>{job.company_city}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            Rp{job.salary_min}
                                        </td>
                                        <td className="py-4 px-6">
                                            Rp{job.salary_max}
                                        </td>
                                        <td className='align-middle table-cell'>
                                            <NavLink to={`/dashboard/list-job-vacancy/edit/${job.id}`} className="p-2 mr-5 rounded-md bg-yellow-200 text-white">Edit</NavLink>
                                            <span onClick={() => deleteJob(job.id)} href="#" className="p-2 mr-5 rounded-md bg-red-600 text-white cursor-pointer">Delete</span>
                                        </td>
                                    </tr>
                                )

                            })}
                        {
                            jobs === null && (
                                <>

                                    {jobs === null ? <tr></tr> :
                                        <tr>
                                            <td><p>Tidak ada data</p></td>
                                        </tr>
                                    }
                                </>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Sidebar>
    )
}
