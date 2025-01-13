import React from 'react';
import { FaPhone, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ProfileSection() {
  return (
    <>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile"
        className="profile-image"
      />
      <h1 className="full-name">Göksal Çoşar</h1>
      <h2 className="position">Backend Developer</h2>
      
      <div className="contact-info">
        <h3>İletişim Bilgileri</h3>
        <div className="social-links">
          <a href="tel:+905555555555" className="social-link">
            <FaPhone /> +90 555 555 55 55
          </a>
          <a href="https://www.linkedin.com/in/g%C3%B6ksal-%C3%A7o%C5%9Far-036ab123a/" 
             className="social-link" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/goksalcosar" 
             className="social-link" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.instagram.com/" 
             className="social-link" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaInstagram /> İnstagram
          </a>
          <a href="https://x.com/" 
             className="social-link" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaXTwitter /> X
          </a>
        </div>
      </div>
    </>
  );
}

export default ProfileSection; 