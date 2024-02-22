import React from 'react'
import { Link } from 'react-router-dom'
const About = () => (
  <>
 <div className='header'>
        <h1>ABOUT US</h1>
     <div class="ui left aligned container">
          <Link to="https://google.com" class="ui medium image">
             <img src="image/14.jpg"></img>
          </Link>
     </div>
     <div class="ui raised very padded text container segment">
     <h2 class="ui header">WELOCOME TO JR CAFE</h2>
     <p> A casual social environment where you can find people reading newspapers and magazines,
       playing board games,studying or chatting with others about current events.
     </p>
     <h2 class="ui header">40%OFF ON WEEKDAYS</h2>
     <li>Deals made especially for you</li>
     <li>Get ready to save big</li>
     </div>
     <div class="ui right aligned container">
           <Link to="https://google.com" class="ui medium image">
             <img src="image/15.jpg"></img>
           </Link>
     </div>
    </div>
<hr />

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

export default About