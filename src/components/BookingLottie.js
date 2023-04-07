import React from 'react'
import Lottie from "lottie-react";



const BookingLottie = ({json}) => {
  return (
    <Lottie animationData={json} loop={true} />
  )
}

export default BookingLottie