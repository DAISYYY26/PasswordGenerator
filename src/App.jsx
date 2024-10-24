import React, { useState,useCallback } from 'react'

function App() {

  const [length,setLength]=useState(8)
  const [numAllowed,setnumAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("Generate password here...")

  const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numAllowed) str+="0123456789"
        if(charAllowed) str+="`~@#!$%^&*()_[]{}><?,."


        for(let i=1;i<=str.length;i++){
          let char =Math.floor(Math.random()*str.length +1)

          pass=str.charAt(char)
        }

        setPassword(pass)



  },[length,numAllowed,charAllowed,setPassword])
  return (
    <>
      <h1 className='text-3xl text-gray-100 text-center font-bold underline mt-3'>Password Generator</h1>
      
      
 
    </>
  )
}

export default App
 