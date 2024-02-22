import React from "react";
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div class="img-container">
        <img
          src="image/17.jpg"
          width="1800"
          height="900"
          alt="Your Image"
        ></img>
        <div class="text-overlay">
          <h2>WE ARE OPEN</h2>
          <p>HAVE A COFFEE MOMENT</p>
        </div>
        <div class="round">
          <img class="ui medium circular image" src="image/round.jpg"></img>
          <p>ON WEEKDAYS</p>
        </div>
      </div>

      <div className="header">
        <h1>ABOUT US</h1>
        <div class="ui left aligned container">
          <Link to="https://google.com" class="ui medium image">
            <img src="image/14.jpg"></img>
            </Link>
        </div>
        <div class="ui raised very padded text container segment">
          <h2 class="ui header">WELOCOME TO JR CAFE</h2>
          <p>
            {" "}
            A casual social environment where you can find people reading
            newspapers and magazines, playing board games,studying or chatting
            with others about current events.
          </p>
          <h2 class="ui header">40%OFF ON WEEKDAYS</h2>
          <li>Deals made especially for you</li>
          <li>Get ready to save big</li>
        </div>
        <div class="ui right aligned container">
          <a href="https://google.com" class="ui medium image">
            <img src="image/15.jpg"></img>
          </a>
        </div>
      </div>
      <hr />

      <div className="header">
        <h1>Menu</h1>
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="image/1.jpg"></img>
            </div>
            <div class="content">
              <div class="header">CHOCOLATE ICE</div>
              <div class="description">150</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/5.jpg"></img>
            </div>
            <div class="content">
              <div class="header">CARAMEL</div>
              <div class="description">200</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/7.jpg"></img>
            </div>
            <div class="content">
              <div class="header">PISTA</div>
              <div class="description">180</div>
            </div>
          </div>
        </div>

        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="image/9.jpg"></img>
            </div>
            <div class="content">
              <div class="header">CAPPACHINO</div>
              <div class="description">120</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/8.jpg"></img>
            </div>
            <div class="content">
              <div class="header">PIZZA</div>
              <div class="description">200</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/6.jpg"></img>
            </div>
            <div class="content">
              <div class="header">DONUT</div>
              <div class="description">100</div>
            </div>
          </div>
        </div>
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="image/12.jpg"></img>
            </div>
            <div class="content">
              <div class="header">VEG DESERT</div>
              <div class="description">140</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/11.jpg"></img>
            </div>
            <div class="content">
              <div class="header">VEG LOADED</div>
              <div class="description">160</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/16.jpg"></img>
            </div>
            <div class="content">
              <div class="header">SUSHI ROLL</div>
              <div class="description">100</div>
            </div>
          </div>
        </div>
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="image/18.jpg"></img>
            </div>
            <div class="content">
              <div class="header">MUSHROOM</div>
              <div class="description">120</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/19.jpg"></img>
            </div>
            <div class="content">
              <div class="header">SANDWICH</div>
              <div class="description">90</div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="image/20.jpg"></img>
            </div>
            <div class="content">
              <div class="header">FRENCH FRIES</div>
              <div class="description">80</div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="header">
        <h1>BOOK A TABLE</h1>
        <section class="contact-form">
          <div class="form-container">
            <h2>Your Details</h2>
            <form>
              <label for="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              ></input>

              <label for="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Mail"
                required
              ></input>

              <label for="phone">Phone: </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Number"
              ></input>

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
          Phone: <a href="tel:1234567890">9787199638</a>
          <br></br>
          Email: <a href="mailto:info@example.com">info@example.com</a>
          <p>Developed By: Dhanush</p>
        </address>
      </section>

      <footer>
        <p>© 2023 JR CAFE. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
