import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from '../layouts/Layout'

const JobDetail = () => {
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
    const { id } = useParams();

    useEffect(() => {
        getJob();
    }, []);

    const getJob = async () => {
        const { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`);
        settitle(data.title);
        setjob_description(data.job_description);
        setjob_qualification(data.job_qualification);
        setjob_type(data.job_type);
        setjob_tenure(data.job_tenure);
        setjob_status(data.job_status);
        setcompany_name(data.company_name);
        setcompany_image_url(data.company_image_url);
        setcompany_city(data.company_city);
        setsalary_min(data.salary_min);
        setsalary_max(data.salary_max);
    };

    return (
        <Layout>
            <div className="container py-5 xl:px-14 sm:py-3 sm:px-2">
                <div className="flex">
                    <div className="w-[25%]">
                        <img src={company_image_url} alt={company_name} className="w-full rounded drop-shadow-md" />
                    </div>
                    <div className="w-[75%] xl:px-5">
                        <h2 className='text-2xl font-bold mb-5'>JOB DETAIL</h2>
                        <hr />
                        <br />
                        <div className='grid grid-cols-2'>
                            <div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Job Title</span>
                                    <span>{title}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Description</span>
                                    <span>{job_description}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Qualifitcation</span>
                                    <span>{job_qualification}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Job Type</span>
                                    <span>{job_type}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Job Tenure</span>
                                    <span>{job_tenure}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Job Status</span>
                                    <span>{job_status === 0 ? 'Ditutup' : 'Dibuka'}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Company Name</span>
                                    <span>{company_name}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Location</span>
                                    <span>{company_city}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Min Salary</span>
                                    <span>Rp{salary_min}</span>
                                </div>
                                <div className="text mb-5">
                                    <span className='block font-bold'>Max Salary</span>
                                    <span>Rp{salary_max}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default JobDetail