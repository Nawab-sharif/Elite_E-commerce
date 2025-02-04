import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react'

export default function ProductCard() {
    let [data, setData] = useState([])
    async function getData() {
        let result = await axios.get('http://localhost:4000/api/getData')
        setData(result.data)
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data)
    return (
        <>
            <div className="cards flex items-center justify-around">
                {data.map((product) => (
                    <div className="w-[300px] rounded-md border">
                        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Laptop" className="h-[200px] w-full rounded-t-md object-cover" />
                        <div className="p-4">
                            <h1 className="inline-flex items-center text-lg font-semibold">{product.productName}</h1>
                            <div className="mt-4">
                                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900">
                                    {product.productPrice}
                                </span>
                                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[15px] font-semibold text-gray-900">
                                    {product.productBrand}
                                </span>
                                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[15px] font-semibold text-gray-900">
                                    {product.productRating}
                                </span>
                            </div>
                            <button type="button" className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Read</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
