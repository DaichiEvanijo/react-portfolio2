import React, { useEffect, useRef, useState } from 'react'

import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"

const Contact = () => {
  // forCVdownload
  const handleDownload = () =>{
    const fileUrl = "https://online.updf.com/index/share/en-US?shareId=e61726d4-7b2f-4c18-a90f-06cee3f38ee0"
    const fileName="CV in English.pdf"
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    link.click()
  }

  // forcontact
  const contactRef=useRef()
  const[isVisible2, setIsVisible2] = useState(false)
  useEffect(()=>{
    function loadText (entries, obs) {
      entries.forEach((entry) =>{
        if(!entry.isIntersecting){
          return
        }
        setIsVisible2(true)
        obs.unobserve(contactRef.current)
      })
    }
    const observer = new IntersectionObserver(loadText, {threshold:0.4})

    observer.observe(contactRef.current)
  },[])
  
  return (
    <div className={`contact container ${isVisible2 ? "showforapi":""}`} ref={contactRef}>
      <h2>Contact</h2>
      <div className="socialslist">
        <div>
          <a href="mailto:takanogi2468@gmail.com" className='emailbutton'>Send email</a>
        </div>
        <div>
          <a className="cvbutton" onClick={handleDownload}>CV (English)</a>
        </div>
        <div className="icon">
          <a href='https://www.instagram.com/'>
            <FaInstagram color="rgba(179, 0, 255) " fontSize="28px" />
          </a>
        </div>
        <div className="icon">
          <a href="https://twitter.com/?lang=en">
            <FaTwitter color="rgba(179, 0, 255) " fontSize="28px" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.youtube.com/">
            <FaYoutube color="rgba(179, 0, 255) " fontSize="28px" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact