import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
    return (
        <section className='flex items-center justify-center h-full w-full'>{children}</section>
    )
}

export default AdminLayout

