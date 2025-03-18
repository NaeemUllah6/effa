const Heading = ({children,className}) => {
  return (
    <>
        <h2 className={`text-[#4C525B] fontArchivo font-light text-[24px] md:text-5xl leading-8 md:leading-[106%] text-center ${className? className : ''}`}>
            {children}
        </h2>
    </>
  )
}

export default Heading