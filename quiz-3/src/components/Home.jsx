import React, { useState, useEffect } from 'react'
import Layout from './layouts/Layout'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState(null)

    let fetchData = () => {
        axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
            .then((res) => {
                setData(res.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            <section className="bg-gray-200 p-5">
                <div className="container mx-auto mt-10">
                    <h1 className="text-xl font-bold ">Find your data that you need!</h1>
                </div>
                <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
                    {
                        data != null && data.length !== 0 && data.map((res, Index) => {
                            return (
                                <div key={res.id} className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img src={res.image_url} className="w-1/3 bg-cover bg-center bg-landscape" />
                                    <div className="w-2/3 p-4">
                                        <h1 className="text-gray-900 font-bold text-2xl">
                                            {res.name}
                                        </h1>
                                        <small>{res.release_year}</small>
                                        <p className="mt-2 text-gray-600 text-sm">
                                            {res.description}
                                        </p>
                                        <div className=" item-center mt-2 text-gray-500">
                                            <span>FPS</span>
                                            <span>2GB</span>
                                            <span>, Android &amp; Ios</span>
                                        </div>
                                        <div className="flex item-center justify-between mt-3">
                                            <h1 className="text-gray-700 font-bold text-xl">
                                                Rp {res.price}
                                            </h1>
                                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                                {res.rating} Ratings
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    {
                        data === null && (
                            <>

                                {data === null ? <tr></tr> :
                                    "Tidak ada data"
                                }
                            </>
                        )
                    }
                </div>
            </section>
        </Layout>
    )
}