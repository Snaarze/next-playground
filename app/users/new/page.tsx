'use client';
import { useRouter } from "next/navigation";
import React from "react";


const NewPage = () => {
  const router = useRouter()
  // this function works in the client side rendering which navigate you to the target parameters page
  return <button className="btn btn-primary" onClick={() => router.push('/users')
  }>Create</button>
};

export default NewPage;
