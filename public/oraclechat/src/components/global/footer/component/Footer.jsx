import React, {
    useEffect
} from "react";

import '@fortawesome/fontawesome-free/css/all.css';

import "../styles/footer.scss";

function Footer(){

    useEffect(() => {
      console.warn("I'm not the best designer\nBut I am good with back-end technologies to process data");
    })
    

    return(
        <>
            <div className="bg-secondary-subtle">
                <footer className="footer-main-home">
                    
                    <div className="row">
                        <div className="col col-sm col-md">
                            <h5>
                                OracleChat Project
                            </h5>

                            <br />

                            <h6>
                                about me
                                <ul className="about-me-ul container-fluid row">
                                    <li className="about-me-li col col-sm col-md col-lg" >
                                        I consistently surpass project deadlines with meticulous attention to detail.
                                    </li>
                                    <li className="about-me-li col col-sm col-md col-lg" >
                                        My commitment to continuous learning drives my pursuit of innovative solutions.
                                    </li>
                                    <li className="about-me-li col col-sm col-md col-lg" >
                                        Efficient problem-solving is at the core of my programming philosophy.
                                    </li>
                                    <li className="about-me-li col col-sm col-md col-lg" >
                                        I thrive in collaborative environments, fostering creativity and teamwork.
                                    </li>
                                    <li className="about-me-li col col-sm col-md col-lg" >
                                        Adaptable and resourceful, I tackle challenges with a positive, can-do attitude.
                                    </li>
                                </ul>
                            </h6>
                        </div>

                        <div className="col col-sm-4 col-md-3">
                            <div className="row">
                                <div className="col col-sm col-md">
                                    <h5>
                                        social media
                                    </h5>
                                    <ul>
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