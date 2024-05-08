import React from 'react';
import './css/Contact.css'
function Contact() {
  return (
    <div>
      <br />
      <h2>Contact Form</h2>  
      <form className='contactForma'>    
      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="username" type="text" class="feedback-input" placeholder="PI Username" />
  <input name="email" type="text" class="feedback-input" placeholder="Email" />

  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
    </div>
  );
}

export default Contact;
