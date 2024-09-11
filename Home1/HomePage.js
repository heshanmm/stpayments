import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a7cc891dcfd13124eb30078cdf1a2bc7e3aa33ff069bc9de6fa0647fab3afd?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"></img>
      {/* Hero Section */}
      <div className="hero-text">
        <h1>Faith,<br/> Community And <br/>Excellence</h1>
        <p>Education is an environment of faith and virtue.</p>
      </div>

      {/* Content Section */}
      <div className="content-section">
      
        <div className="content-item">
          <img src="OIP (1).jpg" alt="School Building" />
          <a href="#" className="content-link">Who we are →</a>
        </div>
        <div className="content-item">
          <img src="download.jpg" alt="Students Learning" />
          <a href="#" className="content-link">Academic →</a>
        </div>
        <div className="content-item">
          <img src="community.jpg" alt="Community" />
          <a href="#" className="content-link">Community →</a>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;