import React from 'react'
import icon6 from '../../assets/images/img6.jpg'
import icon3 from '../../assets/images/img3.jpg'
import icon1 from '../../assets/images/img1.jpg'
import icon2 from '../../assets/images/img2.jpg'
import icon4 from '../../assets/images/img4.jpg'
import Paragraph from '../../ui/paragraph'
import Button from '../../ui/button'
import Heading from '../../ui/heading'
function Penalists() {
    const items = [
        {
            name: 'Steve Yadzinski',
            designation: 'Chief Strategy and Impact Officer, Jobs for the Future',
            icon: icon6,
        },
        {
            name: 'Charles Westrin',
            designation: 'Managing Director and Chief Product Officer, BCG U',
            icon: icon3,
        },
        {
            name: 'Raghu Krishnaiah',
            designation: 'Chief Operating Officer, University of Phoenix',
            icon: icon1,
        },
        {
            name: 'Chad Bandy',
            designation: 'Managing Director, Higher Education Advisory, KPMG',
            icon: icon2,
        },
        {
            name: 'Joseph Clay',
            designation: 'Vice President, HCM Transformation, Oracle  ',
            icon: icon4,
        },
    ]
    return (
        <div className='py-4 md:py-12 '>
            <Heading className=''>
                Meet the Panelists
            </Heading>
            <div className='flex flex-wrap gap-8 justify-center max-w-[809px] mx-auto mt-6 md:mt-12'>
                {
                    items.map((item, index) => (
                        <div key={index} className='w-full md:max-w-[209px]'>
                            <img className='w-full' src={item.icon} alt="" />
                            <Paragraph className='!font-bold font-base text-left mt-6'>
                                {item.name}
                            </Paragraph>
                            <Paragraph className='font-base text-left'>
                                {item.designation}
                            </Paragraph>
                            <Button className='mt-6 whitespace-nowrap'>
                                Connect on LinkedIn
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Penalists
