import React from "react";

import '@fortawesome/fontawesome-free/css/all.css';

import "../styles/footer.scss";

function Footer(){
    return(
        <>
            <div className="bg-secondary-subtle">
                <footer className="footer-main-home">
                    
                    <div className="row">
                        <div className="col-7 col-sm col-md">
                            <h5>
                                OracleChat
                            </h5>

                            <br />

                            <h6>
                                about me
                                <ul>
                                    <li>
                                        I consistently surpass project deadlines with meticulous attention to detail.
                                    </li>
                                    <li>
                                        My commitment to continuous learning drives my pursuit of innovative solutions.
                                    </li>
                                    <li>
                                        Efficient problem-solving is at the core of my programming philosophy.
                                    </li>
                                    <li>
                                        I thrive in collaborative environments, fostering creativity and teamwork.
                                    </li>
                                    <li>
                                        Adaptable and resourceful, I tackle challenges with a positive, can-do attitude.
                                    </li>
                                </ul>
                            </h6>
                        </div>

                        <div className="col-9 col-sm col-md">
                            <div className="row">
                                <div className="col col-sm col-md">
                                    <h5>
                                        social media
                                    </h5>
                                    <ul>
                                        <ul>
                                            <li>
                                                <a id="social-media-footer" href="https://www.linkedin.com/in/fernando-camblor-a85a88151/">
                                                    <i className="fab fa-linkedin-in w-50 w-md-75 w-lg-100 size-xxl"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a id="social-media-footer" href="https://github.com/Fern135">
                                                    <i className="fab fa-github w-50 w-md-75 w-lg-100 size-xxl"></i>
                                                </a>
                                            </li>
                                        </ul>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer;