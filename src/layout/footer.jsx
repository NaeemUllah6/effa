import { Link } from 'react-router-dom'
import FooterLogo from '../assets/svgs/headerLogo.svg'
import Paragraph from '../ui/paragraph'

const Footer = () => {
  const items = [
    [
      { link: '/', Linktext: 'About Us' },
      { link: '/', Linktext: 'Contact Us' },
      { link: '/', Linktext: 'Blogs' },
      { link: '/', Linktext: 'Podcast' },

    ],
    [
      { link: '/', Linktext: 'Employer' },
      { link: '/', Linktext: 'Student' },
      { link: '/', Linktext: 'Universities' },
      { link: '/', Linktext: 'Partners' },

    ],
    [
      { link: '/', Linktext: 'Privacy Policy' },
      { link: '/', Linktext: 'Terms of Use' },
    ],
    [
      { link: '/', Linktext: 'Linked In' },
      { link: '/', Linktext: 'Youtube' },
    ]
  ]

  return (
    <div className="bg-[#E5E7EB] px-4 py-6 rounded-tr-xl rounded-tl-xl min-h-[300px]">
      <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-7  gap-6 h-full">

        <div className="col-span-3 flex flex-col justify-between h-full gap-5">
         <Link to=''>
         <img height={50} width={150} src={FooterLogo} alt="Footer Logo" /></Link>
        </div>


        {items.map((column, colIndex) => (
          <div key={colIndex} className="col-span-1 flex flex-col gap-1">
            {column.map((item, index) => (
              <Link key={index} to={item.link} className="font-normal text-base text-[#4C525B]">
                {item.Linktext}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className='flex items-end  h-full mt-10 md:mt-[215px]'>
      <Paragraph className='!text-center md:text-left'>
          © 2025 All Rights Reserved. 
          </Paragraph>
      </div>
    </div>
  )
}

export default Footer
