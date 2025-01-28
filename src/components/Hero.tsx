import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the Future of Learning
        </h1>
        <p className="text-xl mb-8">
          Join thousands of students and professionals advancing their careers with our cutting-edge courses.
        </p>
        <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Hero;