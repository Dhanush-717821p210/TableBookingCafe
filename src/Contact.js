import React from 'react'

function Contact() {
    return (
    <>
     <div className='header'>
    <h1>BOOK A TABLE</h1>
         <section class="contact-form">
        <div class="form-container">
            <h2>Your Details</h2>
            <form action="#" method="POST">
 
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" placeholder='Name'required></input>
 
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" placeholder='Mail' required></input>
 
                <label for="phone">Phone: </label>
                <input type="tel" id="phone" name="phone" placeholder='Number'></input>
 
                <label for="person">Persons: </label>
                <select class="ui fluid selection dropdown">
                     <option value="1">1</option>
                     <option value="0">2</option>
                     <option value="0">3</option>
                     <option value="0">4</option>
                     <option value="0">5</option>
                     <option value="0">6</option>
                </select>
                <br></br>
                <br></br>
                <button class="ui inverted black button">BOOK</button>
            </form>
        </div>
    </section>
    </div>
    
    <section class="contact-info">
        <h2>Contact Information</h2>
        <address>
            JR CAFE<br></br>
            123 Main Street<br></br>
            City, State Zip Code<br></br>
            Phone: <a href="tel:1234567890">9787199638</a><br></br>
            Email: <a href="mailto:info@example.com">info@example.com</a>
        </address>
    </section>
 
    <footer>
        <p>© 2023 JR CAFE. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Contact;
