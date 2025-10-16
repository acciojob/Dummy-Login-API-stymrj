import React, { useState } from 'react'

const App = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[userErrorMsg, setUserErrorMsg] = useState("") 
    const[passwordErrorMsg, setPasswordErrorMsg] = useState("") 

    const data = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]
  return (
    <div>
        <input onChange={(e) => {
            setEmail(e.target.value)
        }} id='input-email' />
        <p id='user-error'>{userErrorMsg}</p>

        <input onChange={(e) => {
            setPassword(e.target.value)
        }} id='input-password' />
        <p id='password-error'>{passwordErrorMsg}</p>




        <button onClick={() => {
            const foundItem = data.find((item) => {
                return item.email == email 
            })
            if(!foundItem)
            {
                setUserErrorMsg("User not found")
                return
            }
            if(password != foundItem.password)
            {
                setPasswordErrorMsg("Password Incorrect")
            }
            // console.log(foundItem)
        }} id='submit-form-btn'>Submit</button>
    </div>
  )
}

export default App