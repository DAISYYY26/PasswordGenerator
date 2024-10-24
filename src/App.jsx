import React, { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "`~@#!$%^&*()_[]{}><?,."


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 40)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <h1 className='text-3xl text-gray-100 text-center  font-bold underline mt-16'>Password Generator</h1>

      <div className='w-full max-w-md mx-auto mt-36 pl-4 shadow-md rounded-lg p-12  my-8 text-orange-400 bg-gray-800 pb-28 pr-10 font-serif text-md'>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 pt-2 mt-7' placeholder='password' readOnly ref={passwordRef} />

          <button className='outline-none mt-7 bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>


        <div className="flex text-sm gap-y-7 gap-x-3">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={40} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={() => { setnumAllowed((prev) => !prev) }} />
            <label htmlFor="numberInput"> Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => { setcharAllowed((prev) => !prev) }} />
            <label htmlFor="characterInput"> Characters</label>
          </div>




        </div>

      </div>



    </>
  )
}

export default App
