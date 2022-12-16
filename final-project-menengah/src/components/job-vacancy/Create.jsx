import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from '../layouts/Sidebar'

const Create = () => {
    const [title, settitle] = useState('');
    const [job_description, setjob_description] = useState('');
    const [job_qualification, setjob_qualification] = useState('');
    const [job_type, setjob_type] = useState('');
    const [job_tenure, setjob_tenure] = useState('');
    const [job_status, setjob_status] = useState('');
    const [company_name, setcompany_name] = useState('');
    const [company_image_url, setcompany_image_url] = useState('');
    const [company_city, setcompany_city] = useState('');
    const [salary_min, setsalary_min] = useState('');
    const [salary_max, setsalary_max] = useState('');
    const navigate = useNavigate();

    const updateJob = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            }, {
                headers: {
                    'Authorization': `token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjY4MTczNTQ0LCJleHAiOjE2Njg3NzgzNDQsIm5iZiI6MTY2ODE3MzU0NCwianRpIjoiZWFKZDJKTmdUVUgzdUVLZCIsInN1YiI6Nzc4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.1bKlYXH7YCCpz_sKES0bXgPbCf0LpYuQmEFt3beMYjo`
                }
            });
            navigate("/dashboard/list-job-vacancy");
        } catch (err) {
            return err
        }
    };

    return (
        <Sidebar>
            <h2 className="font-bold text-2xl mb-5">Create Job</h2>
            <div className="">
                <form onSubmit={updateJob}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required name="title" value={title} onChange={(e) => settitle(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                        <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} name="job_description" value={job_description} onChange={(e) => setjob_description(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Qualification</label>
                        <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} name="job_qualification" value={job_qualification} onChange={(e) => setjob_qualification(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="job_type" value={job_type} onChange={(e) => setjob_type(e.target.value)}>
                            <option value="On Site">On Site</option>
                            <option value="Work From Home">Work From Home</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Tenure</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="job_tenure" value={job_tenure} onChange={(e) => setjob_tenure(e.target.value)} />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Status</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="job_status" value={job_status} onChange={(e) => setjob_status(e.target.value)}>
                            <option value="0">Ditutup</option>
                            <option value="1">Dibuka</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="company_name" value={company_name} onChange={(e) => setcompany_name(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Image URL</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="company_image_url" value={company_image_url} onChange={(e) => setcompany_image_url(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company City</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="company_city" value={company_city} onChange={(e) => setcompany_city(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Min</label>
                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="salary_min" value={salary_min} onChange={(e) => setsalary_min(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Max</label>
                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="salary_max" value={salary_max} onChange={(e) => setsalary_max(e.target.value)} />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </Sidebar>
    );
};

export default Create;