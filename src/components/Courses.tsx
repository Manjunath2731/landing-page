import React from 'react';
import Image from 'next/image';

interface Course {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
        image: "/images/course-06.jpg",
        title: "Web Development Bootcamp",
        description: "Learn full-stack web development from scratch.",
        duration: "12 Weeks",
        level: "Beginner",
      },
      {
        image: "/images/course-10.jpg",
        title: "Data Science Essentials",
        description: "Master data science with Python and machine learning.",
        duration: "10 Weeks",
        level: "Intermediate",
      },
      {
        image: "/images/course-11.jpg",
        title: "Mobile App Development",
        description: "Build cross-platform apps with Flutter.",
        duration: "8 Weeks",
        level: "Advanced",
      },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;