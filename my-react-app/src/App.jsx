//import react
import React from 'react'

//import images
import logo from './assets/Abstraction.png'
import weblogo from './assets/weblogo.png'

//import the CSS
import './App.css'
//Declaring the app function
const App = () => {
  //HTML to be returned
  return (
    <div className='page'>

    {/*left side of screen*/}

      <div className='left'>
        <img src={weblogo} alt='logo' width='135px' height='117px' />
        <h3>Getting Started With VR Creation</h3>
        <img src={logo} alt='logo' width='630.49px' height='673.93px' />
      </div>

    {/*right side of screen*/}
      <div className='right'>
        //Language select
        <select name="language" id="lang">
          <option value="En">English (UK) </option>
        </select>

        //Actual form from the right side of the screen//Startinh from "Create Account"
        <form>

        </form>
      
      </div>
    </div>
  )
}

export default App
