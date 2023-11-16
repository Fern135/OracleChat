import React from "react";

import "../style/contactemail.scss";

const ContactEmail = () => {
    return (
        <>  
            <div>
                <a href="mailto:webdesignbusiness11@gmail.com?subject=OracleChat%20Project%20Contact&body=Hello%20my%20name%20is%20(add%20name%20here)%0AI'm%20Emailing%20in%20regards%20to%0A(write message here)%0A%0ASigned:%20">
                    <i class="fa-solid fa-envelope size-xlg"></i>
                </a>
            </div>
        </>
    );
};

export default ContactEmail;