// Footer.jsx
import React from 'react';

import "../styles/footer.scss";

function Footer({ info }){
  return (
    <footer className="bg-dark text-light p-5 mt-5">
      <div className="container">
        
        <div className="row">
          <div className="col-md-6 border">
              <a href="/">
                <p className='border'> 
                  OracleChat Project
                </p>
              </a>
              <p className='border'>
                { info }

                <br />

                <div className="btn-group">

                  <a href="https://github.com/Fern135/OracleChat" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                    <i className="fab fa-github size-xlg"></i>
                  </a>

                  <a href="/" className='btn btn-primary'>
                    <i className="fa-solid fa-house"></i>
                  </a>

                  <a href="/about" className='btn btn-info'>
                    <i className="fa-solid fa-info"></i>
                  </a>

                </div>

              </p>
          </div>

          {/* social media */}
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
