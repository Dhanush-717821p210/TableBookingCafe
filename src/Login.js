import React from 'react'

function Login() {
  return (
      <>
     <div className='header'>
    <h1>LOGIN</h1>
         <section class="contact-form">
        <div class="form-container1">
            <h2>BECOME A MEMBER</h2>
            <form>
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" placeholder='Mail'required></input>
 
                <label for="password">Password: </label>
                <input type="password" id="pass" name="pass" placeholder='Pass'></input>
                <p>
                <button class="ui inverted black button">LOGIN</button>  
                </p>    
            </form>
        </div>
    </section>
    </div>
    <footer>
        <p>© 2023 JR CAFE. All rights reserved.</p>
    </footer>
    </>
  )
}
export default Login;