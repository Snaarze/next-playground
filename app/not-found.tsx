import React from 'react'
import Link from 'next/link';
const notFound = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='btn btn-primary'>Return Home</Link>
        </div>
    )
}

export default notFound;
