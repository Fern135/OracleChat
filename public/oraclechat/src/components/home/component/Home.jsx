import React, {
    // useEffect
} from 'react';
import "../style/home.scss";

function Home(){
    
    // useEffect(() => {
    //     let num = 0;
    //     console.log(`times reloaded: ${num}`);
    //     num++;
    // },[])
    
    
    return (
        <>
            <div className="container-fluid">

                <div id='title-main-header-wrapper' className='bg-secondary'>
                    <h1 id='title-main-header' className='text-center bg-black text-white'>
                        OracleChat
                    </h1>
                </div>

                <br />

                {/* real time messaging */}
                <div className="container border rounded-sm text-left real-time-msg-wrapper">

                    <div className="card real-time-msg">
                        <div className="card-header">
                            <h5>
                                Real-Time Messaging:
                            </h5>
                        </div>
                        <div className="card-body">
                            <h6>
                                Enjoy instant,<br />
                                real-time communication with OracleChat, <br />
                                keeping you connected with <br />
                                friends, family, and colleagues.
                            </h6>
                        </div>
                    </div>

                </div>


                {/* user friendly */}
                <div className="container border rounded-sm text-right user-friendly-wrapper">
                    <div className="card user-friendly">
                        <div className="card-header">
                            <h5>
                                User-Friendly:
                            </h5>
                        </div>
                        <div className="card-body">
                            <h6>
                                OracleChat's intuitive interface is easy for all users,<br />
                                and you can personalize it to match your unique style and preferences.
                            </h6>
                        </div>
                    </div>
                </div>

                {/* privacy and security */}
                <div className="container border rounded-sm text-left privacy-security-wrapper">
                    <div className="card private-secure">
                        <div className="card-header">
                            <h5>
                                Privacy & Security:
                            </h5>
                        </div>
                        <div className="card-body">
                            <h6>
                            We prioritize your privacy and ensure end-to-end encryption, <br />
                            making OracleChat a secure platform for your conversations.
                            </h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

/*
    Real-Time Messaging:
    Enjoy instant, real-time communication with OracleChat, 
    keeping you connected with friends, family, and colleagues.
    
    User-Friendly & Customizable:
    OracleChat's intuitive interface is easy for all users, and you can personalize it to match your unique style and preferences.

    Privacy & Security:
    We prioritize your privacy and ensure end-to-end encryption, making OracleChat a secure platform for your conversations.
    

    TODO: all bellow
    Open Source:
    OracleChat is open-source, fostering collaboration and continuous improvement. Join our community to contribute and enhance the chat experience.
    
    Cross-Platform & Versatile:
    Use OracleChat on various devices, including smartphones, tablets, and desktops. 
    It's available for iOS, Android, and web browsers, providing flexibility 
    in how you connect with others.
*/


export default Home;