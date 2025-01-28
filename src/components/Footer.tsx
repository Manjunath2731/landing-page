import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">We are a leading platform for online learning, offering a wide range of courses to help you achieve your goals.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-green-500">Home</a></li>
              <li><a href="#" className="hover:text-green-500">Courses</a></li>
              <li><a href="#" className="hover:text-green-500">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@lmspro.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-green-500">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-500">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;