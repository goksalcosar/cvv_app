import React from 'react';
import { FaGamepad, FaBook, FaMusic, FaLaptopCode } from "react-icons/fa";

function HobbiesSection() {
  return (
    <div className="hobbies-section">
      <h3>Hobiler ve İlgi Alanları</h3>
      <div className="hobby-items">
        <div className="hobby-item">
          <FaGamepad />
          <span>Video Oyunları</span>
        </div>
        <div className="hobby-item">
          <FaBook />
          <span>Kitap Okuma</span>
        </div>
        <div className="hobby-item">
          <FaMusic />
          <span>Müzik</span>
        </div>
        <div className="hobby-item">
          <FaLaptopCode />
          <span>Yazılım</span>
        </div>
      </div>
    </div>
  );
}

export default HobbiesSection; 