import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewProduct() {
    let { id } = useParams()
    console.log(id)
    let [data, setData] = useState([])
    // console.log(data)
    async function getDataById() {
        let result = await axios.get('http://localhost:4000/api/getData')
        setData(result.data.find((data) => data.id == id))
    }
    useEffect(() => {
        getDataById()
    }, [])
    console.log(data)

    return (
        <div className="flex items-center justify-center sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
            <div className="w-[300px] rounded-md border">
                <img
                    src={`http://localhost:4000/${data.image}`}
                    width='100px'
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4 flex flex-col items-start">
                    <h1 className=" items-center text-lg font-semibold py-2">ID:- {data.id}</h1>
                    <h1 className=" items-center text-lg font-semibold py-2">Product Brand:- {data.productBrand}</h1>
                    <h1 className=" items-center text-lg font-semibold py-2">Product Name:- {data.productName}</h1>
                    <h1 className=" items-center text-lg font-semibold py-2">Product Price:- {data.productPrice}</h1>
                    <h1 className=" items-center text-lg font-semibold py-2">Product Rating:- {data.productRating}</h1>
                    <Link type="button" to='/admin' className="mt-4 text-center w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Back</Link>
                </div>
            </div>
        </div>
    )
}