import React from 'react'
import Heading from '../../ui/heading'
import Paragraph from '../../ui/paragraph'

const Workplace = () => {
    return (
        <div className='py-6 md:py-12'>
            <div className='max-w-[1006px] mx-auto'>
                <Heading>Job Readiness in the AI-Augmented Workplace</Heading>
                <div className='md:px-4'>
                    <Paragraph className='mt-4 md:mt-8'>
                        The rise of artificial intelligence is rapidly transforming the job market, creating both exciting opportunities and new challenges for talent. How can we ensure that our workforce is equipped with the skills and competencies they need to thrive in this evolving landscape?
                    </Paragraph>
                    <Paragraph className='mt-4 md:mt-6'>
                        Join us for the Job Ready Executive Roundtable, on March 31st, a dynamic conversation featuring prominent leaders from industry and academia. We'll delve into the critical issues facing early career talent in the age of AI, exploring actionable strategies to foster job readiness and ensure a smooth transition into the future of work.
                    </Paragraph>
                </div>
            </div>
            <div className='mt-4 md:mt-8 max-w-[1006px] mx-auto'>
                <Heading className='text-[#4C525B] font-semibold text-[22px] md:text-base text-left'>
                    In this roundtable, we'll discuss:
                </Heading>
                <ul className='mt-3 md:mt-7'>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            The evolving skills landscape in the age of AI
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            Critical human skills for success in an AI-augmented workplace
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            Reshaping traditional entry-level roles and emerging job opportunities
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            Effective strategies for job readiness development
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            Bridging the gap between education and employment
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            Fostering a culture of lifelong learning and adaptability
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph className='text-left leading-[22px]'>
                            Innovative funding models for job readiness programs
                        </Paragraph>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Workplace