'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const page = (props) => {
    let param = decodeURIComponent(props.params.account)
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
        if (!Array.isArray(data)) return;

        for (let index = 0; index < data.length; index++) {
            if (param === data[index]?.email) {
                setUserData(Array.isArray(JSON.parse(data[index]?.data)) ? JSON.parse(data[index]?.data) : []);
                break; // Stop loop once a match is found
            }
        }
    }, data);


    return (
        <>
            <div className="h-screen overflow-y-scroll my-20 w-screen text-sm text-white bg-[#254f1a]">
                <div className="md:w-[80vw] w-[90vw] gap-5 flex flex-col justify-center items-center m-auto h-full">
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
        </>
    )
}

export default page