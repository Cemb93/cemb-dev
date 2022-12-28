import React, { useState } from 'react'

export const NavBar = () => {
  const [variable, setVariable] = useState("hidden");
  const handlerOnClick = () => {
    setVariable(variable === "hidden" ? "" : "hidden");
  }
  return (
    <div>
      {
        window.matchMedia('').matches ? (
          <div>
            <a href="#project" >Projects</a>
            <a href="#skills" >Skills</a>
            <a href="#contact" >Contact</a>
          </div>
        ): (
          <div>
            <button onClick={handlerOnClick} ></button>
            <div>
              <ul>
                <li><a href="#project" >Projects</a></li>
                <li><a href="#skills" >Skills</a></li>
                <li><a href="#contact" >Contact</a></li>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}
