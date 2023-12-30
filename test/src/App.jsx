import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");

  const [otp, setOtp] = useState("");

  const submitOtp = () => {

    if (digit1 && digit2 && digit3 && digit4 && digit5 && digit6) {

      setOtp(digit1 + digit2 + digit3 + digit4 + digit5 + digit6 + "")

      console.log('submitOtp: ', otp)
      alert("OTP submitted successfully")
    } else {
      alert("Fill in all boxes")
    }



  }

  return (
    <div className="app">
      <div class="card">
        {/* <div className="top-bar"></div> */}
        <div className='header'>
          <h1>Verify Your Account</h1>
          <p className="gray">We are sending an OTP to validate your
            mobile number, Hang on!</p>
        </div>

        <div className="otp">
          <input type="text" value={digit1} maxLength={1} onChange={(e) => {
            setDigit1(e.target.value)
            console.log("Digit 1: ", digit1)
          }} />
          <input type="text" value={digit2} maxLength={1} onChange={(e) => setDigit2(e.target.value)} />
          <input type="text" value={digit3} maxLength={1} onChange={(e) => setDigit3(e.target.value)} />
          <input type="text" value={digit4} maxLength={1} onChange={(e) => setDigit4(e.target.value)} />
          <input type="text" value={digit5} maxLength={1} onChange={(e) => setDigit5(e.target.value)} />
          <input type="text" value={digit6} maxLength={1} onChange={(e) => setDigit6(e.target.value)} />
        </div>

        <p><span className="gray">A SMS has been sent to</span> 321-264-5231</p>
        <button onClick={() => { submitOtp() }}>Submit</button>
      </div>
    </div>
  )
}

export default App
