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
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAf58AA8Z6nusXt5B-ppRug_vXEqLa657gFe5CBe4jVeSA_CxcsmYrZxZZxXSgwU5KA0aGs7lVPrdcDefw_XxI6W0EFno5krXI88dYw3BUM6HEZRO_N4ZTMzoYhMd-g4S3fo8XIxOME4.svg"
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