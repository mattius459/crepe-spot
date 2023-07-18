import React, { useContext } from 'react'
import '../style/switch.css'
import { ThemeContext } from '../contexts/themecontexts'

function Switch() {
  const {theme, toggleTheme } = useContext(ThemeContext)
  return (
    <label className="switch">
    <input type="checkbox" onClick={toggleTheme} />
    <span className="slider round"></span>
  </label>
  )
}

export default Switch