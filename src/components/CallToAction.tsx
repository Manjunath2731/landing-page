import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-green-500 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <button className="bg-white text-green-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;