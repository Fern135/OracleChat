import React from "react";
import "../style/about.scss";

import Footer from "../../global/footer/component/Footer";
import ContactEmail from "../../global/contact/component/Contact";

function About(){


    return (
        <>
            <div className="main-background-about container-fluid">
                <div className="parallax-content">

                    {/* id='title-main-header-wrapper' */}
                    <div id='itle-main-header-wrapper' className='bg-secondary'>
                        <h1 id='title-main-header' className='text-center bg-black text-white'>
                            <a href="/">
                                OracleChat Project
                            </a>
                        </h1>
                    </div>

                    <br />

                    <div className='main-important-parts-wrapper'>

                        {/* real time messaging */}
                        <div className="container-fluid rounded-sm d-flex justify-content-center align-items-center middle-screen">

                            <div className="card text-center">
                                <div className="card-header">
                                    <h5 className="about-project-header">
                                        About Project
                                    </h5>
                                </div>
                                <div className="card-body border-secondary">
                                    <h6 className="about-project-description">
                                        Project started with a simple idea<br />
                                        I should make something using go. <br />
                                        So, I made this project to learn Go and also for fun.<br />
                                        This is not just a chat app but it's more like an API server that can be used by other apps or websites as well <br />
                                        This is an open source project so you can use it as well! <br />
                                        You are welcome to contribute or even join the team if you want to help us out!<br />
                                        The main purpose of this project is to provide a platform where users can chat with each other <br /> without any restrictions or limitations <br />
                                        And it was the first project that I made in Go.<br />

                                        <hr />
                                        If you have any inquiries or are interested in potential collaboration, <br />
                                        feel free to reach out; I'm open to discussing professional opportunities. <br />
                                        <br />
                                        { <ContactEmail /> }
                                    </h6>
                                </div>
                            </div>

                        </div>


                    </div>

                
                    <div className="row footer-about">
                        <div className="col col-sm col-md">
                            <Footer info=""/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;