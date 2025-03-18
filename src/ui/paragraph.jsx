import React from 'react'

const Paragraph = ({children,className}) => {
  return (
    <div>
        <p className={`text-base font-normal leading-5 fontArchivo text-[#4C525B] text-center ${className ? className : ''}`}>{children}</p>
    </div>
  )
}

export default Paragraph