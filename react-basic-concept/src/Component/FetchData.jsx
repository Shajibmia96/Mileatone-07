// import React from 'react';

import { useEffect, useState } from "react";

const FetchData = () => {
        
    const [data ,setData] = useState([])

    useEffect(() =>{
            try {
                const loadData = async()=>{
                    const URL = "https://openapi.programming-hero.com/api/videos/category/1000"
                    const res = await fetch(URL)
                    const data = await res.json()
                    setData(data.data)
                   
                }
                loadData()
            } catch (error) {
                console.log("ERROR")
            }
    }, [])
    console.log(data)
    return (
        <div className="my-20 text-center">
             <h1>Data load there</h1>
             {
               data && data?.map(item => <h1 className="text-3xl my-5">{item.title}</h1>)
             }
        </div>
    );
};

export default FetchData;