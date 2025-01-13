import React from 'react';

function ExperienceSection() {
  return (
    <>
      <h2 className="section-title">İş Deneyimi</h2>
      <div className="experience-items">
        <div className="experience-item">
          <h3>Wingie Enuygun Group</h3>
          <p className="date">Eylül 2022 - Günümüz</p>
          <h4 className="position-history">
            Junior Software Developer (Mart 2024 - Günümüz)
            <div className="tech-stack">Symfony, MySQL, Docker, MongoDB, RabbitMQ, Memcache</div>
            
            Assistant Software Developer (Haziran 2023 - Mart 2024)
            <div className="tech-stack">Symfony, Docker, MySQL, NodeJS, React</div>
            
            Software Development Intern (Eylül 2022 - Haziran 2023)
            <div className="tech-stack">MySQL, C#, Selenium, Docker, HTML, CSS, JavaScript, Symfony</div>
          </h4>
        </div>
      </div>
    </>
  );
}

export default ExperienceSection; 