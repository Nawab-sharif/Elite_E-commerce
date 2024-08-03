import React, { useState , useEffect } from 'react';
import {useNavigate , useParams} from 'react-router-dom';
import axios from 'axios';

export default function UpdateProduct() {
    let [data, setData] = useState({ productName: "", productBrand: "", productPrice: "", productRating: "" });
    let navigate = useNavigate()
    let { id } = useParams()

    async function getDataById() {
        let result = await axios.get('http://localhost:4000/api/getData')
        setData(result.data.find((data) => data.id == id))
    }
    useEffect(() => {
        getDataById()
    }, [])
    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault()
        let result = await axios.put(`http://localhost:4000/api/productUpdate/${id}`,data);
        alert("Data Updated");
        navigate('/')
    }

    return (
        <section>
                <div className="flex items-center justify-center sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md p-6 border-4 border-black rounded-xl">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add Product</h2>
                        <form method="POST" onSubmit={handleSubmit} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="text-base font-medium text-gray-900">Product Name</label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder=" Product type"
                                            id="name"
                                            name='productName'
                                            value={data.productName}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="brand" className="text-base font-medium text-gray-900">Product Brand</label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Product Brand"
                                            id="brand"
                                            name='productBrand'
                                            value={data.productBrand}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="price" className="text-base font-medium text-gray-900">Product Price</label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder=" Product Price"
                                            id="price"
                                            name='productPrice'
                                            value={data.productPrice}
                                            onChange={handleChange}
                                        ></input>
                                    </div>

                                </div>
                                <div>
                                    <label htmlFor="rating" className="text-base font-medium text-gray-900">Product Rating</label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder=" Product Rating"
                                            id="rating"
                                            name='productRating'
                                            value={data.productRating}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                                        Update items
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
        </section>
    )
}