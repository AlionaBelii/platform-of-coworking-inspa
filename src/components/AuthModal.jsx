import React, { use, useEffect } from 'react'
import { useState } from 'react'

const AuthModal = ({active, setActive}) => {
  
    const [nameUsr, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dblPassword, setDblPassword] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [dblPasswordDirty, setDblPasswordDirty] = useState(false)

    const [nameError, setNameError] = useState('Name can not be empty')
    const [emailError, setEmailError] = useState('E-mail can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [dblPasswordError, setDblPasswordError] = useState('Password can not be empty')
    const [formValid, setFormValid] = useState(false)

    // useEffect(() => {
    //   if (emailError || passwordError || nameError || dblPasswordError) {
    //     setFormValid(false)
    //   } else {
    //     setFormValid(true)
    //   }
    // }, [emailError, passwordError, nameError, dblPasswordError])

    useEffect(() => {
      if (isNameValid && isEmailValid && isPasswordValid && isDblPasswordValid) {
        setFormValid(true)
      } else {
        setFormValid(false)
      }
    })

    const [isNameValid, setIsNameValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isDblPasswordValid, setIsDblPasswordValid] = useState(false)

    const nameHandler = (e) => {
      setName(e.target.value)
      const re = /^[a-zA-Z\-]+$/;
      if (!re.test(String(e.target.value).toLowerCase())) {
        setNameError("E-mail isn't correct: it should be without special characters, contains a domanin @, dots aren't allowed at the start or the end.")
        setIsNameValid(false)
      } else {
        setNameError("Username looks fine! ✅")
        setIsNameValid(true)
      }
    }

    const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError("E-mail isn't correct: it should be without special characters, contains a domanin @, dots aren't allowed at the start or the end.")
        setIsEmailValid(false)
      } else {
        setEmailError("E-mail looks fine! ✅")
        setIsEmailValid(true)
      }
    }

    const passwordHandler = (e) => {
      setPassword(e.target.value)
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (e.target.value.length < 4 || e.target.value.length > 12) {
        setPasswordError("Password must be longer than 4 chars and shorter than 12 chars.")
        setIsPasswordValid(false)
      } else {
        setPasswordError("Password looks fine! ✅")
        setIsPasswordValid(true)
      }
    }

    const dblPasswordHandler = (e) => {
      const value = e.target.value
      setDblPassword(e.target.value)
      
      if (value !== password) {
        setDblPasswordError("Passwords are not similar!")
        setIsDblPasswordValid(false)
      } else {
        setDblPasswordError("Passwords match! ✅")
        setIsDblPasswordValid(true)
      }
    }

    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'name':
          setNameDirty(true)
          break
        case 'email':
        setEmailDirty(true)
        break
        case 'password':
          setPasswordDirty(true)
          break
        case 'dblPassword':
          setDblPasswordDirty(true)
          break
      }
    }
  return (
    <div 
        className={active ? "modal active" : "modal"}>
            <div className="modal-cntr" onClick={e => e.stopPropagation()}>
                <form className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="font-bold text-4xl" style={{color:'var(--blue-color)'}}>Sign up</h2>
                        <p className="mt-2 text-sm">Welcome to your Proffesional Community, join us today!</p>
                      </div>
                      <img className="h-7 cursor-pointer" onClick={() => setActive(false)} src="./public/images/header-close-menu.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-5 w-full mt-10">
                      <div>
                        {(nameDirty && nameError) && <div style={{color: nameError === "Username looks fine! ✅" ? "green" : "red"}} className="text-[14px]">{nameError}</div>}                    
                        <label name="name" className="font-medium text-[16px] mt-2" style={{color:'var(--blue-color)'}}>Username</label>
                        <input value={nameUsr} onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} name='name' className="input-form w-full mt-2" type="text" placeholder="Your name" />
                      </div>
                      <div>
                        {(emailDirty && emailError) && <div style={{color: emailError === "E-mail looks fine! ✅" ? "green" : "red"}} className="text-[14px]">{emailError}</div>}
                        <label name="email" className="font-medium text-[16px] mt-2" style={{color:'var(--blue-color)'}}>E-mail</label>
                        <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='email' className="input-form w-full mt-2" type="text" placeholder="Your e-mail" />
                      </div>
                      <div>
                        {(passwordDirty && passwordError) && <div style={{color: passwordError === "Password looks fine! ✅" ? "green" : "red"}} className="text-[14px]">{passwordError}</div>}
                        <label name="password" className="font-medium text-[16px] mt-2" style={{color:'var(--blue-color)'}}>Password</label>
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' className="input-form w-full mt-2" type="password" placeholder="Your password" />
                      </div>
                      <div className="">
                        {(dblPasswordDirty && dblPasswordError) && <div style={{color: dblPasswordError === "Passwords match! ✅" ? "green" : "red"}} className="text-[14px]">{dblPasswordError}</div>}
                        <label name="dblpassword" className="font-medium text-[16px] mt-2" style={{color:'var(--blue-color)'}}>Repeat your password</label>
                        <input value={dblPassword} onChange={e => dblPasswordHandler(e)} onBlur={e => blurHandler(e)} name='dblPassword' className="input-form w-full mt-2" type="password" placeholder="Repeat your password" />
                      </div>
                    </div>
                    <div className="w-full mt-5">
                      <button disabled={!formValid} type="submit" className={`blue-btn mt-5 w-full ${!formValid ? "opacity-50 cursor-not-allowed" : ""}`}>Create account</button>
                      <button className="stroke-btn mt-5 flex items-center gap-3 justify-center w-full"><img className="h-6" src="./public/images/google-icon.png" alt="" /><span>Sign up with Google</span></button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default AuthModal
