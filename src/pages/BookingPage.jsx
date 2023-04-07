import React from 'react'
import BookingLottie from '../components/BookingLottie'
import bannerLotrie from '../assets/images/82002-support.json'
import Layout from '../layout/Layout'



const BookingPage = () => {
  return (
   <Layout>
     <section className=' bg-[#eff7ff]'> 
       <div className='container mx-auto flex justify-center items-center'>
        <div className="content">
            <div className="title">
                 <h1 className='text-[60px] font-bold'>We focus on your Story.</h1>
            </div>
            <div className="aboute-text">
                  <h4 className='text-[30px]'>Why your Story?</h4>
                  <p className='text-[18px]'>Because our goal, as accountants, is to provide you with a list of services that are very reliable as you go across your business journey..</p>
            </div>
        </div>
        <div className="hero-image">
           <BookingLottie json={bannerLotrie}/>
        </div>
    </div>
    </section>


    <section className='service-section py-5'>
         <div className="container mx-auto">
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>Select Service</h2>
              <div className="py-5 services-list grid grid-cols-2 justify-between gap-5">

                <div className='shadow-s p-5 bg-[#7390ff] '>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>
                 
                <div className='shadow-sm p-5 bg-[#7390ff]'>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

                <div className='shadow-sm p-5 bg-[#7390ff]'>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

                <div className='shadow-sm p-5 bg-[#7390ff]'>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

                <div className='shadow-sm p-5 bg-[#7390ff] '>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

                <div className='shadow-sm p-5 bg-[#7390ff]'>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

                <div className='shadow-sm p-5 bg-[#7390ff]'>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

                <div className='shadow-sm p-5 bg-[#7390ff]'>
                    <label className='block text-white' htmlFor="">
                     <input type="checkbox" />
                     Family financial planning 1 hour
                    </label>
                </div>

              </div>
         </div>
    </section>

    <section className='service-section py-5'>
         <div className="container mx-auto">
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>Select Time</h2>
            <div className='grid grid-cols-2 gap-10'>
                 <div>
                   <input className='w-3/5 outline-none border-0' type='date'/>
                 </div>
                 <div className='grid grid-cols-3 gap-5 items-center'>
                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>
                     
                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#7390ff] rounded-md shadow-md p-5 text-gray-50 font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>

                     <div className='bg-[#f1f4f7] rounded-md shadow-md p-5 text-[#7390ff] font-bold'>
                         <span>9:00 pm</span>
                     </div>
                     
                 </div>
            </div>
         </div>
    </section>
     
  <section className="bg-gray-100 py-10">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Your Details</h2>
    <div className='details form bg-slate-50 p-10'>
        <form action="">
             <div className='grid grid-cols-2 gap-8'>
                 <div>
                    <div className='my-4'>
                         <input className='w-full p-3 ' type="text" placeholder='your name' />
                    </div>

                    <div  className='my-4'>
                       <input className='w-full p-3' type="email" placeholder='your mail..' />
                    </div>

                    <div  className='my-4'>
                       <input className='w-full p-3 ' type="text" placeholder='your phone..' />
                    </div>
                 </div>
                 <div>
                    <div className='my-4'>
                       <textarea rows={4} className='w-full p-2 resize-none' name="" >
                           Notes(Optional)
                       </textarea>
                    </div>

                    <div className='my-4'>
                        <button  style={{backgroundImage: `linear-gradient(61deg, rgba(115,144,255,1) 65%, rgba(236,234,234,1) 97%)`}} className='px-2 py-2 text-white rounded-md w-full' type='submit'>Book Now</button>
                    </div>
                 </div>
    
             </div>
        </form>
    </div>
  </div>
</section>

    
   </Layout>
  )
}


export default BookingPage