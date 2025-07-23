import React from 'react'
import { Users } from '../users/page'
import { sort } from 'fast-sort';
import Link from 'next/link';
interface Props {
    user: Users[]
}


const User = ({ user }: Props) => {

    return (
        <div>
            {/* current time only changes on development or treating it as static data/page, but in production it will not re-render the data */}
            <p>Current Time : {new Date().toLocaleTimeString()}</p>
            {/* when fetching data from the api it will treat it as unchanging data and store in a cache for faster access */}
            {/* when fetching data that is dynamic it will treat it as request data meaning that data might change in different scenarios */}
            {/* when building a product circle means it is static data, f logo means that it is dynamic/server rendering*/}

            <table>
                <thead>
                    <tr>
                        <th><Link href={'/users?sortOrder=name'}>Name</Link></th>
                        <th><Link href={'/users?sortOrder=email'}>Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(u => (
                        <tr key={u.id}>
                            <th >{u.name}</th>
                            <td>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User
