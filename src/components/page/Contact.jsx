import React from "react";

function Contact(props){
  return <>
    <div className="container m-5 contact-us">
      <div className="col-md-12">
        <h3>Contact Us</h3>
        <address>
          <p>Please contact <a href="mailto:info@ghiblicollection.com">info@ghiblicollection.com</a></p> 
          <p>Customer service is available 9 a.m. to 5 p.m., Monday through Friday [Pacific Time]. 
              Customer service is not available on weekends or major holidays.</p>
          <p>1640 S. Sepulveda Blvd., Suite 400 <br/>
          Los Angeles, CA 90025</p>
        </address>
      </div>
    </div>
  </>
}

export default Contact;