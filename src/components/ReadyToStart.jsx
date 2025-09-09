import React, { use } from 'react'
import { useState } from 'react'

const ReadyToStart = () => {
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('This field can not be empty')

    const [fullname, setFullname] = useState('')
    const [fullnameDirty, setFullnameDirty] = useState('')
    const [fullnameError, setFullnameError] = useState('This field can not be empty')

    const [companyName, setCompanyName] = useState('')
    const [companyNameDirty, setCompanyNameDirty] = useState('')
    const [companyNameError, setCompanyNameError] = useState('This field can not be empty')

    const [description, setDescription] = useState('')
    const [descriptionDirty, setDescriptionDirty] = useState('')
    const [descriptionError, setDescriptionError] = useState('This field can not be empty')

    const [deadline, setDeadline] = useState('')
    const [deadlineDirty, setDeadlineDirty] = useState('')
    const [deadlineError, setDeadlineError] = useState('This field can not be empty')

     const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z\-]+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("E-mail isn't correct: it should be without special characters, contains a domanin @, dots aren't allowed at the start or the end.")        
        } else {
            setEmailError("")
        }
    }

    const fullnameHandler = (e) => {
        const value = e.target.value
        setFullname(e.target.value)
        if (!value) {
            setFullnameError("This field can not be empty")
        } else {
            setFullnameError("")
        }
        
    }

    const descriptionHandler = (e) => {
        const value = e.target.value
        setDescription(e.target.value)
        if (!value) {
            setDescriptionError("This field can not be empty")
        } else {
            setDescriptionError("")
        }
        
    }
    const deadlineHandler = (e) => {
        const value = e.target.value
        setDeadline(e.target.value)
        if (!value) {
            setDeadlineError("This field can not be empty")
        } else {
            setDeadlineError("")
        }
        
    }
    
    const companyNameHandler = (e) => {
        const value = e.target.value
        setCompanyName(e.target.value)
        if (!value) {
            setCompanyNameError("This field can not be empty")
        } else {
            setCompanyNameError("")
        }
        
    }

    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'fullname':
          setFullnameDirty(true)
          break
        case 'email':
            setEmailDirty(true)
            break
        case 'companyName':
          setCompanyNameDirty(true)
          break
        case 'description':
          setDescriptionDirty(true)
          break
        case 'deadline':
          setDeadlineDirty(true)
          break
      }
    }

  return (
    <section className="mt-[80px] py-[45px] items-center relative z-30">
        <h1 className="mono-display text-center text-4xl mb-5 md:text-5xl">Ready to start your project?</h1>
        <h3 className="text-2xl font-bold mb-5 text-center" style={{color: 'var(--blue-color)'}}>We’d Love to Hear From You</h3>
        <form action="" method="post" className="grid grid-cols-1 gap-10 mt-30 lg:grid-cols-2">
            <div className="flex flex-col mb-5">
                {(fullnameDirty && fullnameError) && <div style={{color:"red"}} className="text-[14px]">{fullnameError}</div>}

                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="fullname" name="fullname" id="fullname" >Full Name <span className="text-red-500">*</span></label>

                <input value={fullname} onChange={e => fullnameHandler(e)} onBlur={e => blurHandler(e)} className="input-form" type="text" placeholder="Full Name" name="fullname" id="fullname" />
            </div>

            <div className="flex flex-col mb-3">
                {(companyNameDirty && companyNameError) && <div style={{color: "red"}} className="text-[14px]">{companyNameError}</div>}

                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="companyname" name="companyname" id="companyname" >Company Name <span className="text-red-500">*</span></label>

                <input value={companyName} onChange={e => companyNameHandler(e)} onBlur={e => blurHandler(e)} className="input-form" type="text" placeholder="Company Name" name="companyname" id="companyname" /> <br />
                <span className="text-sm mt-[-15px]"> <span className="text-red-500">*</span>write “Personal” if you're not affiliated with any business.</span>
            </div> 

            <div className="flex flex-col mb-5">
                {(emailDirty && emailError) && <div style={{color:"red"}} className="text-[14px]">{emailError}</div>}

                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="email" name="email" id="email" >E-mail Address <span className="text-red-500">*</span></label>

                <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} className="input-form" type="text" placeholder="E-mail" name="email" id="email" />
            </div>
            
            <div className="flex flex-col mb-5">

                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="phonenumber" name="phonenumber" id="phonenumber" >Phone Number (optional)</label>

                <input className="input-form" type="text" placeholder="Phone-number" name="phonenumber" id="phonenumber" />
            </div>
            <div className="flex flex-col mb-5">

                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="category_project" name="category_project" id="category_project" >Project Type / Category <span className="text-red-500">*</span></label>

                <select className="block w-full p-5 border rounded-lg border-gray-300" name="category_project" id="category_project" >
                    <option value="brand_identity_logo"  id="category_project" name="brand_identity_logo">Brand Identity / Logo Design</option>
                    <option value="ui/ux_design"  id="category_project" name="ui/ux_design">Website / UI Design</option>
                    <option value="packaging_design" id="category_project" name="packaging_design">Packaging Design</option>
                    <option value="social_media_content" id="category_project" name="social_media_content">Social Media Content</option>
                    <option value="print_materials" id="category_project" name="print_materials">Print Materials (Flyers, Brochures, Posters)</option>
                    <option value="illustration" id="category_project" name="illustration">Illustration / Custom Graphics</option>
                </select>
            </div>
            <div className="flex flex-col mb-5">
                {(descriptionDirty && descriptionError) && <div style={{color:"red"}} className="text-[14px]">{descriptionError}</div>}

                 <label className="text-xl font-semibold" style={{color: 'var(--blue-color)'}} for="description_project" name="description_project" id="description_project" >Describe Your Project <span className="text-red-500">*</span></label>
                 
                <textarea value={description} onChange={e => descriptionHandler(e)} onBlur={e => blurHandler(e)} name="description_project" id="description_project"  rows="3" className="block p-5 w-full text-[16px] rounded-lg border border-gray-300 mt-3" placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className="flex flex-col mb-5 mt-3">
                {(deadlineDirty && deadlineError) && <div style={{color:"red"}} className="text-[14px]">{deadlineError}</div>}

                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="deadline" name="deadline" id="deadline" >Preferred Deadline <span className="text-red-500">*</span></label>
                <input value={deadline} onChange={e => deadlineHandler(e)} onBlur={e => blurHandler(e)} className="input-form" type="text" placeholder="2 weeks" name="deadline" id="deadline" />
            </div>
            <div className="flex flex-col mb-5 mt-3">
                <label className="text-xl font-semibold mb-3 " style={{color: 'var(--blue-color)'}} for="dropzone-file" name="dropzone-file" id="dropzone-file" >Upload Files (references, guides, etc.)</label>
                 <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-25
                 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <p class="mb-2 text-[16px] text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
                </div> 
            </div>
            <button className="blue-btn justify-self-end lg:col-end-3" type="submit">
                Send
            </button>
        </form>
    </section>
  )
}

export default ReadyToStart
