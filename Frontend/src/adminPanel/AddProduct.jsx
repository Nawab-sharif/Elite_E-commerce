import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
    let navigate = useNavigate();

    // let [data, setData] = useState({ productName: "", productBrand: "", productPrice: "", productRating: "" ,image: ""});
    // function handleChange(e) {setData({ ...data, [e.target.name]: e.target.value })}

    let [productName, setProductName] = useState("")
    let [productBrand, setProductBrand] = useState("")
    let [productPrice, setProductPrice] = useState("")
    let [productRating, setProductRating] = useState("")
    let [image, setImage] = useState(null)

    async function handleSubmit(e){
        e.preventDefault()
        let data = new FormData()
        data.append('productBrand', productBrand)
        data.append('productName', productName)
        data.append('productPrice', productPrice)
        data.append('productRating', productRating)
        data.append('image', image)
      
        let result = await axios.post('http://localhost:4000/api/saveData', data, {
          headers:{
            'Content-Type': "multipart/form-data"
          }
        })

        alert("Data Saved");
        navigate('/admin')
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
                                            onChange={(e)=>setProductName(e.target.value)}
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
                                            onChange={(e)=>setProductBrand(e.target.value)}
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
                                            onChange={(e)=>setProductPrice(e.target.value)}
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
                                            onChange={(e)=>setProductRating(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="image" className="text-base font-medium text-gray-900">Select Image</label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="file"
                                            id="image"
                                            name='image'
                                            accept='images/*'
                                            onChange={(e)=>setImage(e.target.files[0])}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                                        Add items
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
        </section>
    )
}