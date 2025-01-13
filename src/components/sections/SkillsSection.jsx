import React from 'react';

function SkillsSection() {
  return (
    <>
      <h2 className="section-title">Yetenekler</h2>
      <div className="skills-section">
        <div className="skill-category">
          <h3>Programlama Dilleri</h3>
          <div className="skill-items">
            <div className="skill-item">
              <span className="skill-name">PHP</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">C#</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '60%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Go</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Teknolojiler & Araçlar</h3>
          <div className="skill-items">
            <div className="skill-item">
              <span className="skill-name">Symfony</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">NodeJs</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '35%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">React</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '15%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">SQL</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">MongoDB</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">RabbitMQ</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '55%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Git</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Docker</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Memcache</span>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSection; 