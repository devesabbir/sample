import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-800 text-gray-400">
  <div className="container mx-auto py-8 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-4">About Us</h3>
        <p className="leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nibh nec mi vehicula, in consectetur sapien lobortis. Praesent tempor risus vel risus efficitur bibendum.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="list-none leading-loose">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">About Us</a></li>
          <li><a href="#" className="hover:text-gray-200">Shop</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Social Media</h3>
        <ul className="list-none flex items-center">
          <li className="mr-4"><a href="#"><i className="fab fa-facebook-square text-2xl" /></a></li>
          <li className="mr-4"><a href="#"><i className="fab fa-twitter-square text-2xl" /></a></li>
          <li><a href="#"><i className="fab fa-instagram-square text-2xl" /></a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <p className="leading-loose"><i className="fas fa-map-marker-alt mr-2" />123 Main Street, New York, NY</p>
        <p className="leading-loose"><i className="fas fa-envelope mr-2" />info@example.com</p>
        <p className="leading-loose"><i className="fas fa-phone mr-2" />(123) 456-7890</p>
      </div>
    </div>
    <hr className="border-gray-700 my-8" />
    <p className="text-center">© 2023 MyStore. All rights reserved.</p>
  </div>
</footer>


  )
}

export default Footer