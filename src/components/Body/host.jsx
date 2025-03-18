import React from 'react'
import Heading from '../../ui/heading'
import HostIcon from '../../assets/svgs/Hostimg.svg'
import Paragraph from '../../ui/paragraph'
import Button from '../../ui/button'
const Host = () => {
    return (
        <div className='py-4 lg:py-12'>
            <div className='flex items-center flex-col'>
                <Heading>
                    Our Host
                </Heading>
                <div className='mt-4 md:mt-14'>
                    <img className='mx-auto' src={HostIcon} alt="" />
                    <Paragraph className='font-semibold mt-3 md:mt-6'>
                        Charlie Nguyen
                    </Paragraph>
                    <Paragraph className='font-semibold mt-2'>
                        CEO, Employer Funded Financial Aid (EFFA)
                    </Paragraph>
                    <div className='flex justify-center mt-3 md:mt-8'>
                        <Button className='w-full md:w-fit'>Connect on LinkedIn</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Host