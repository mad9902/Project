import React, { useState, useEffect } from 'react'
import Layout from './layouts/Layout'
import axios from 'axios'
import { Button, Label, TextInput } from "flowbite-react";


const ManageData = () => {
    const [data, setData] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)

    // INPUT
    const [image, setimage] = useState('');
    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const [rating, setrating] = useState('');
    const [release_year, setrelease_year] = useState('');
    const [size, setsize] = useState('');
    const [is_android_app, setis_android_app] = useState('');
    const [is_ios_app, setis_ios_app] = useState('');

    useEffect(() => {
        let fetchData = () => {
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
                .then((res) => {
                    let resultData = res.data
                    setData(resultData)
                })
        }

        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", image)
        formData.append("name", name)
        formData.append("category", category)
        formData.append("description", description)
        formData.append("price", price)
        formData.append("rating", rating)
        formData.append("release_year", release_year)
        formData.append("size", size)
        formData.append("is_android_app", is_android_app)
        formData.append("is_ios_app", is_ios_app)

        try {
            await axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', formData)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout>
            <div className="w-10/12 mx-auto">
                <h2 className="font-bold text-2xl mb-3">Manage Data</h2>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mb-12">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                        <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Game Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Category
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Rating
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Release Year
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Size
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Is Android App
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Is IOS App
                                </th>
                                <th scope="col" className="py-3 px-6 w-36">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data != null && data.length !== 0 && data.map((res, Index) => {
                                    return (
                                        <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {res.name}
                                            </th>
                                            <td className="py-4 px-6">
                                                {res.category}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.description}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.price}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.rating}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.release_year}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.size}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.is_android_app}
                                            </td>
                                            <td className="py-4 px-6">
                                                {res.is_ios_app}
                                            </td>
                                            <td className='align-middle table-cell'>
                                                <button className="p-2 mr-5 rounded-md bg-yellow-200 text-white">edit</button>
                                                <button className="p-2 mr-5 rounded-md bg-red-600 text-white">delete</button>
                                            </td>
                                        </tr>
                                    )

                                })}
                            {
                                data === null && (
                                    <>

                                        {data === null ? <tr></tr> :
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
            </div>

            <div className="w-10/12 mx-auto">
                <h2 className="font-bold text-2xl mb-3">Create Data</h2>
                <div className="container mx-auto mt-20">

                    <h1>Gambar Data Game <hr></hr></h1>


                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block mt-4">
                                <Label value="Image URL" />
                            </div>
                            <TextInput value={image} onChange={(e) => setimage(e.target.value)}
                                name="Image"
                                id="image"
                                type="text"
                                required={true}
                            />
                        </div>

                        <h1>Data Game<hr></hr></h1>

                        <div>
                            <div className="mb-2 block mt-2">
                                <Label value="Name" />
                            </div>
                            <TextInput value={name} onChange={(e) => setname(e.target.value)} type="text" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block mt-2">
                                <Label value="Category" />
                            </div>
                            <TextInput value={category} onChange={(e) => setcategory(e.target.value)} type="text" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block mt-2">
                                <Label value="Description" />
                            </div>
                            <TextInput value={description} onChange={(e) => setdescription(e.target.value)} type="text" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label value="Price" />
                            </div>
                            <TextInput value={price} onChange={(e) => setprice(e.target.value)} type="number" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label value="Rating" />
                            </div>
                            <TextInput value={rating} onChange={(e) => setrating(e.target.value)} type="number" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label value="Release Year" />
                            </div>
                            <TextInput value={release_year} onChange={(e) => setrelease_year(e.target.value)} type="date" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label value="Size" />
                            </div>
                            <TextInput value={size} onChange={(e) => setsize(e.target.value)} type="number" required={true} />
                        </div>

                        <h1>Jenis Perangkat<hr></hr></h1>

                        <div>
                            <div className="mb-2 block">
                                <Label value="Android" />
                            </div>
                            <TextInput value={is_android_app} onChange={(e) => setis_android_app(e.target.value)} type="text" required={true} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label value="IOS" />
                            </div>
                            <TextInput value={is_ios_app} onChange={(e) => setis_ios_app(e.target.value)} type="text" required={true} />
                        </div>

                        <div className="flex items-center gap-2">
                        </div>
                        <Button type="submit ">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
export default ManageData