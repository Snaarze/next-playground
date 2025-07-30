"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  //this is just an example no need to use client side since we are not using any functional or interactivity within this component
  // we can just define this with other component in order to access them in our server side
  const { status, data: session } = useSession();

  return (
    <nav className="flex gap-5 bg-slate-500 p-5 shadow-[20px_5px_20px_rgba(0,0,0,0.25)]">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      {status === "loading" && (
        <div className="loading loading-spinner loading-xl"></div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}

      {status === "authenticated" && (
        <>
          <p>{session.user!.name}</p>
          <Link href="/api/auth/signout"> Logout</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
