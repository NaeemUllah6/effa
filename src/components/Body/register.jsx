import React from 'react'
import Heading from '../../ui/heading'
import Button from '../../ui/button'

function Register() {
    return (
        <div className='py-4 md:py-12'>
            <div className='flex justify-center flex-col items-center gap-8'>
            <Heading className='!font-bold !text-base'>
                Register for updates and be notified when the Roundtable is released!
            </Heading>
            <Button>
                Register Here
            </Button>
            </div>
        </div>
    )
}

export default Register
