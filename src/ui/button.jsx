import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button className={`px-2 md:px-8 py-2 w-full md:w-fit md:py-[15px]  border-2 hover:bg-[#FFA830] hover:text-white duration-500 border-[#FFA830] text-[#FFA830] rounded-[10px] fontArchivo ${className ? className : ''}`}>
      {children}
    </button>
  )
}

export default Button
