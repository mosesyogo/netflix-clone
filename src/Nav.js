import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.imgur.com/6VBx3io.png"
        alt="User Avatar"
      />
    </div>
  )
}

export default Nav