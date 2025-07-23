'use client';
import React from 'react'
import { useState } from 'react';
const Theme = () => {
    // this doesnt work since the main component is from the server component, which means that browser api cannot be call inside that component
    // const [theme, settheme] = useState("light")
    // const data = localStorage.setItem("data", theme)
    // console.log(localStorage.getItem("data"))
    return (
        <div>
            <label htmlFor="">
                {/* <input type="checkbox" name="" id="" onChange={() => settheme((prev) => prev === "light" ? "dark" : "light")} />
                {" " + theme} */}
            </label>
        </div>
    )
}

export default Theme
