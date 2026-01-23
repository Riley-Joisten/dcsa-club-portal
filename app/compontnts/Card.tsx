import React from 'react'
import Link from "next/link";

export default function Card() {
    return (
    <div className="h-[5vh] w-full border-2 border-black flex items-center">
        <Link href="/" className="ml-4 mb-1">
            <h1 className="text-4xl text-green-600 font-medium">
                Campus<span className=" text-black font-bold">Connect</span>
            </h1>
        </Link>
        <div className="flex ml-auto items-center">
            <input type="text" defaultValue='help' className="bg-gray-200 rounded-md p-1 ml-auto mr-4" />
        </div>
            <div className="relative w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full">
                <svg className="absolute w-12 h-12 text-body-subtle -left-1" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>

</div>

)
}
