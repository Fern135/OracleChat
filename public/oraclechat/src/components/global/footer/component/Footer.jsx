// Footer.jsx
import React from 'react';

import "../styles/footer.scss";

function Footer(){

  return (
    <footer className="bg-dark text-light p-4 mt-5">
      <div className="container">
        
        <div className="row">
          <div className="col-md-6 border">
              <p className='border'> OracleChat Project</p>
              <p className='border'>
                Project started as a portfolio project.<br />Just decided to make it open source
                while also providing a platform where all users can chat and more.
                <br />
                <a href="https://github.com/Fern135/OracleChat" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                  <i className="fab fa-github size-xlg"></i>
                </a>
              </p>
          </div>

          <div className="col-md-6 text-end">
            <a href="https://github.com/Fern135" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="fab fa-github size-xlg"></i>
            </a>
            
            <a href="https://www.linkedin.com/in/fernando-camblor-a85a88151/" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-linkedin-in size-xlg"></i>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
