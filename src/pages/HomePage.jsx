import React from 'react'
import BookingLottie from '../components/BookingLottie'
import bannerLotrie from '../assets/images/82002-support.json'
import bgimage from '../assets/images/PngItem_1246858.png'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <Layout>
    <section className="hero bg-[#eff7ff] py-5">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <h1 className="text-5xl font-bold leading-tight text-gray-700 mb-4">Welcome to our Website</h1>
      <p className="text-xl text-gray-700 leading-tight mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices metus quis ligula dignissim suscipit. </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</button>
     </div>
     <div className="md:w-1/2">
       <BookingLottie json={bannerLotrie}/>
    </div>
  </div>
</section>

<section style={{backgroundImage:`url(${bgimage})`}} className="about py-16">
  <div className="container mx-auto px-4">
    <div className="md:flex md:justify-between">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 leading-loose mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices metus quis ligula dignissim suscipit. Morbi sed felis eget velit luctus dapibus. Nullam in lorem at risus congue bibendum. Fusce sit amet dolor sed lectus faucibus congue sed quis risus. Praesent interdum lorem at magna faucibus, ac sagittis nisl volutpat. </p>
        <Link to={''} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</Link>
      </div>
      <div className="md:w-1/2">
         
      </div>
    </div>
  </div>
</section>



    </Layout>
  )
}

export default HomePage