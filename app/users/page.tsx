// next js is relying or lookin on naming convention not with the configuration of the routes
// when creating a nested routing, just create another folder and a file to identify that those file are under of the root/parent Component
// next js routing naming should be page + the type of the file.
// ctrl + p is for searching files

// when it comes to rendering environment, use the mix of ssr and csr, since the ssr cannot listen to some parts of the browser built in which are available in the
// csr like listening to event, manage state and side effects
// use csr technique when only needed as if there are no other options

// all the components isnide the app folder are considered as  server side rendering by default
// server rendering doesnt support server component for server routing
// all the components inside the app folder are not public accessible unless we have page file inside it
// when fetching it is better to define the shape of the object and fetch in on the server side whenever possible
// fetching on the server has benefits of  caching for fasting access, it is built in cache
// static rendering is a ready data at build time, which will be only rendered once and save it on the cache which are based on the file system
// while dynamic rendering is fetching data at network 
import React from "react";
import User from "../components/User";
import { sort } from "fast-sort";
import Link from "next/link";
import { GET } from "../api/users/route";


interface Props {
  searchParams: { sortOrder: string }
}

export interface Users {
  id: number
  name: string
  username: string
  email: string
}

// query parameters doesnt need to be inside on dynamic route to be used
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  ;
  const fetchApi = await fetch('https://jsonplaceholder.typicode.com/users',
    // this means that we are disabling the caching
    { cache: 'no-store' }
    // keep the data fresh with the set period of time
    // this means that it will re run a background job which fetch new/fresh data from the backend depending on the value set
    // { next: { revalidate: 1 } }
  ).then(res => res)


  const user: Users[] = await fetchApi.json()
  const filteredUsers: Users[] = sort(user).asc(sortOrder === 'name' ? user => user.name : user => user.email)
  return (
    <div className="flex flex-col ml-10">
      {/* not the optimal navigation since the files are redownloaded that are fetched on the root component, it makes the network request bloated */}

      <p className="text-3xl mt-5 font-extrabold">User List </p>
      <Link href="/users/new" className=" text-white w-28 rounded-md px-10 py-1  hover:text-purple bg-blue-600"> New </Link>
      <User user={filteredUsers} />

      {/* link is a built in tags that has the same function in Link react, but it doesnt need a component here */}
      {/* only renders the needed component details which is the new component which doesnt require to download the details again from the root component*/}
    </div>
  );
};

export default UsersPage;
