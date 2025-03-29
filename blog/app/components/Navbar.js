import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="h-[10vh] w-[90vw] text-md max-md:justify-center text-gray-800 m-auto flex justify-between items-center">
                <div className="font-bold text-black text-xl">
                    <Link href="/">
                        HotCoffee
                    </Link>
                    </div>
                <div className="max-md:hidden">
                    <ul className='flex gap-3 justify-between items-center'>
                        <Link href="#">
                            <li>Home</li>
                        </Link>
                        <Link href="#">
                            <li>Articles</li>
                        </Link>
                        <Link href="#">
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></li>
                        </Link>
                        <Link href="#">
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></li>
                        </Link>
                        <Link href="#">
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar