"use client"; // Ensure it's a Client Component in Next.js App Router

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser
} from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Page = () => {
    const { isSignedIn, user, isLoaded } = useUser();
    const url = useRef();
    const text = useRef();
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);

    // Fetch data from API
    useEffect(() => {
        const getData = async () => {
            try {
                let res = await fetch('/api/data');
                let json = await res.json();
                console.log("Fetched data:", json); // Debugging
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);

    // Filter user data after fetching
    useEffect(() => {
        if (!isLoaded || !user || !Array.isArray(data)) return;

        for (let index = 0; index < data.length; index++) {
            if (user.emailAddresses?.[0]?.emailAddress === data[index]?.email) {
                setUserData(Array.isArray(JSON.parse(data[index]?.data)) ? JSON.parse(data[index]?.data) : []);
                break; // Stop loop once a match is found
            }
        }
    }, [data, user, isLoaded]);

    if (!isLoaded) return <p className="fixed text-white">Loading...</p>;

    const handleForm = async () => {
        try {
            const response = await fetch("/api/data", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.emailAddresses?.[0]?.emailAddress,
                    url: url.current.value,
                    text: text.current.value
                })
            });

            const result = await response.json();
            console.log("Form submission response:", result); // Debugging

            url.current.value = '';
            text.current.value = '';
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <SignedOut>
                <p>You Are Not Logged In, Please Login</p>
            </SignedOut>
            <SignedIn>
                <div className="h-screen w-screen text-sm text-white bg-[#254f1a]">
                    <div className="md:w-[80vw] w-[90vw] gap-5 flex flex-col justify-center items-center m-auto h-full">
                        <div className="flex gap-2 flex-wrap max-md:flex-col justify-center items-center gap-y-3 w-full">
                            {/* Take The URL */}
                            <input ref={url} type="text" className="placeholder:text-stone-600 p-2 md:w-[25vw] rounded text-black" placeholder="Enter Your URL" />
                            {/* Take The Text */}
                            <input ref={text} type="text" className="placeholder:text-stone-600 p-2 md:w-[25vw] rounded text-black" placeholder="Enter Your Text" />
                            <button onClick={handleForm} type="submit" className="md:w-[30vw] p-2 rounded bg-blue-500">Create</button>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            {Array.isArray(userData) && userData.length > 0 ? (
                                userData.map((e, index) => (
                                    <Link href={`${e.url}`} key={index}>
                                        <p className="w-full p-2 hover:bg-white hover:text-black border-[1px] border-white rounded-lg">
                                            {e.text}
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-center text-gray-300">No data available</p>
                            )}
                        </div>
                    </div>
                </div>
            </SignedIn>
        </>
    );
};

export default Page;
