import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "('E:\Frithcode Training Programme\Project school\abc-school\public\work.jpg')" }}>
        <nav className="absolute top-0 left-0 w-full p-4 flex justify-center space-x-8 text-purple-800">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#course-details" className="hover:underline">Course Details</a>
          <a href="#student-bio" className="hover:underline">Student Bio</a>
          <a href="#payments" className="hover:underline">Payments</a>
          <a href="#login" className="hover:underline">Login</a>
        </nav>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center text-white">
          <h1 className="text-5xl font-bold">Faith, Community, And Excellence</h1>
          <p className="mt-4 text-xl">Education is an environment of faith and virtue.</p>
        </div>
      </div>

      {/* Section with Images and Links */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="text-center">
            <img src="images (2).jpg" alt="Who we are" className="mx-auto mb-4" />
            <a href="#who-we-are" className="text-xl text-purple-800 hover:underline">Who we are →</a>
          </div>
          <div className="text-center">
            <img src="images (2).jpg" alt="Academic" className="mx-auto mb-4" />
            <a href="#academic" className="text-xl text-purple-800 hover:underline">Academic →</a>
          </div>
          <div className="text-center">
            <img src="images (2).jpg" alt="Community" className="mx-auto mb-4" />
            <a href="#community" className="text-xl text-purple-800 hover:underline">Community →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;