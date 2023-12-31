import { useState } from 'react'
import './App.css'
import Input from './components/Input';

function App() {

  const [inputArray, setInputArray] = useState(["", "", "", "", "", ""])

  const submitOtp = () => {
    console.log(inputArray)
    const otp = inputArray.toString()
    if (otp.length < inputArray.length) {
      alert("Fill in all boxes")
    } else {
      alert("Submitted")
    }
  }

  return (
    <div className="app">
      <div class="card">
        <div className='header'>
          <h1>Verify Your Account</h1>
          <p className="gray">We are sending a OTP to validate your
            mobile number, Hang on!</p>
        </div>

        <div className="otp">
          {
            inputArray.map((input, index) => {
              return <Input
                key={index}
                input={input}
                inputArray={inputArray}
                index={index}
                handleInput={setInputArray}

              />
            })
          }
        </div>

        <p><span className="gray">A SMS has been sent to</span> 321-264-5231</p>
        <button onClick={() => { submitOtp() }}>Submit</button>
      </div>
    </div>
  )
}

export default App
