import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      role: "Student",
      quote: "This platform changed my life! The courses are top-notch.",
      image: "/images/user1.jpeg",
    },
    {
      name: "Jane Smith",
      role: "Developer",
      quote: "I landed my dream job after completing the web development course.",
      image: "/images/user2.jpeg",
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist",
      quote: "The data science course is the best I've ever taken.",
      image: "/images/user3.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <p className="text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;