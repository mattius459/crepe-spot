import React, { useContext } from 'react'
import '../style/switch.css'
import { ThemeContext } from '../contexts/themecontexts'

function Switch() {
  const {theme, toggleTheme } = useContext(ThemeContext)
  return (
    <label className="switch">
    <input type="checkbox" onClick={toggleTheme} />
    <span className="slider round">
    <svg className="svg" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
<path d="M10.915 9.12891C7.3877 9.12891 5.19336 7.0166 5.19336 3.59863C5.19336 2.6416 5.35059 1.7666 5.60352 1.28809C5.72656 1.04883 5.76758 0.884766 5.76758 0.700195C5.76758 0.37207 5.50781 0.0507812 5.11133 0.0507812C5.00879 0.0507812 4.83105 0.0849609 4.60547 0.173828C2.00781 1.22656 0.223633 3.90625 0.223633 6.80469C0.223633 10.9746 3.25879 14.0166 7.42871 14.0166C10.3887 14.0166 12.8564 12.417 13.9844 9.83301C14.0869 9.60059 14.1211 9.40234 14.1211 9.27246C14.1211 8.88965 13.8408 8.65039 13.5195 8.65039C13.3555 8.65039 13.1982 8.67773 12.9727 8.78027C12.4668 8.99219 11.6807 9.12891 10.915 9.12891ZM1.7207 6.77051C1.7207 4.96582 2.60254 3.19531 4.05176 2.15625C3.89453 2.65527 3.80566 3.20215 3.80566 3.80371C3.80566 7.9668 6.38281 10.4893 10.6416 10.4893C11.1475 10.4893 11.585 10.4346 11.9951 10.291C11.0312 11.6924 9.30859 12.5195 7.46289 12.5195C4.14746 12.5195 1.7207 10.0928 1.7207 6.77051Z" fill={theme === 'dark' ? "#000000" : "#FFFFFF"}/>
</svg>
    <svg width="16" className="svg" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path d="M8.74121 1.04395C8.74121 0.640625 8.39258 0.291992 7.98926 0.291992C7.5791 0.291992 7.23047 0.640625 7.23047 1.04395V2.4043C7.23047 2.81445 7.5791 3.16309 7.98926 3.16309C8.39258 3.16309 8.74121 2.81445 8.74121 2.4043V1.04395ZM11.4482 3.55273C11.1611 3.83984 11.1611 4.3252 11.4551 4.6123C11.7354 4.89941 12.2275 4.90625 12.5215 4.60547L13.4854 3.6416C13.7656 3.35449 13.7656 2.8623 13.4785 2.5752C13.1914 2.28809 12.6992 2.29492 12.4121 2.58203L11.4482 3.55273ZM3.45703 4.60547C3.7373 4.89941 4.22949 4.89941 4.5166 4.6123C4.80371 4.33203 4.81055 3.83301 4.53027 3.55273L3.56641 2.58203C3.28613 2.29492 2.78711 2.28809 2.50684 2.5752C2.21289 2.8623 2.21289 3.35449 2.49316 3.63477L3.45703 4.60547ZM7.98242 11.7354C9.99219 11.7354 11.6533 10.0742 11.6533 8.06445C11.6533 6.04785 9.99219 4.38672 7.98242 4.38672C5.97949 4.38672 4.31152 6.04785 4.31152 8.06445C4.31152 10.0742 5.97949 11.7354 7.98242 11.7354ZM7.98242 10.2998C6.76562 10.2998 5.74707 9.28125 5.74707 8.06445C5.74707 6.84082 6.76562 5.8291 7.98242 5.8291C9.20605 5.8291 10.2178 6.84082 10.2178 8.06445C10.2178 9.28125 9.20605 10.2998 7.98242 10.2998ZM14.9961 8.81641C15.4062 8.81641 15.7549 8.47461 15.7549 8.06445C15.7549 7.6543 15.4062 7.3125 14.9961 7.3125H13.6426C13.2324 7.3125 12.8906 7.6543 12.8906 8.06445C12.8906 8.47461 13.2324 8.81641 13.6426 8.81641H14.9961ZM0.975586 7.3125C0.56543 7.3125 0.223633 7.6543 0.223633 8.06445C0.223633 8.47461 0.56543 8.81641 0.975586 8.81641H2.3291C2.73926 8.81641 3.08789 8.47461 3.08789 8.06445C3.08789 7.6543 2.73926 7.3125 2.3291 7.3125H0.975586ZM12.5078 11.5166C12.2275 11.2363 11.7354 11.2363 11.4482 11.5234C11.1611 11.8105 11.1611 12.2959 11.4551 12.5898L12.4258 13.5537C12.7061 13.8408 13.1982 13.834 13.4854 13.5469C13.7725 13.2598 13.7725 12.7676 13.4785 12.4805L12.5078 11.5166ZM2.49316 12.4805C2.19922 12.7607 2.19922 13.2529 2.47949 13.54C2.7666 13.8271 3.26562 13.834 3.55273 13.5537L4.5166 12.5898C4.80371 12.3027 4.81055 11.8105 4.53027 11.5303C4.23633 11.2363 3.74414 11.2363 3.45703 11.5234L2.49316 12.4805ZM8.74121 13.7178C8.74121 13.3145 8.39258 12.9658 7.98926 12.9658C7.5791 12.9658 7.23047 13.3145 7.23047 13.7178V15.0781C7.23047 15.4883 7.5791 15.8369 7.98926 15.8369C8.39258 15.8369 8.74121 15.4883 8.74121 15.0781V13.7178Z" fill={theme === 'dark' ? "#000000" : "#FFFFFF"}/>
<defs>
<linearGradient id="paint0_linear_462_483" x1="-2.5" y1="9" x2="18.5" y2="9" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5A4A4"/>
<stop offset="1" stop-color="#8CCCF5"/>
</linearGradient>
</defs>
</svg>

    </span>
  </label>
  )
}

export default Switch