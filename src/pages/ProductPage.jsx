import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import instance from '../utils/axios'

const ProductPage = () => {
    const [products, setProducts] = useState([])
    
    

    useEffect(() => {
        const getProducts = async () => {
            try {
               let res = await instance({
                   method:'GET',
                   url: 'products'
                })
             setProducts(res)
            } catch (error) {
                
            } 
        }
        getProducts()
    },[])

    let renderProduct = null
    
    if (products?.data?.products.length === 0) renderProduct = <h2>Shop is empty</h2>
    if (products?.data?.products.length > 0) renderProduct = products.data.products


  return (
    <Layout>
<section className="shop py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          renderProduct?.map((p) => {
            console.log(p)
         return(
        <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img className='w-full h-56 object-cover object-center' src={p?.thumbnail} alt="" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{p?.title}</h3>
          <p className="text-gray-600 leading-loose mb-4">{p?.description}</p>
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-800 mr-4">${p?.price}</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add to Cart</button>
          </div>
        </div>
      </div>
          )})
        }
    
    </div>
  </div>
</section>


 </Layout>
  )
}

export default ProductPage