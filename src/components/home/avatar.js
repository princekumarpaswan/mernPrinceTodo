import image from "../home/img/av.png"
import React, { useEffect, useState } from "react"
import '../home/css/avatar.css';
import { Typewriter } from 'react-simple-typewriter'
import axios from "axios";


const Avatar = () => {
    const [name, setName] = useState('')

    let id = localStorage.getItem("id")
    const getUser = async () => {
        const getdata = await axios.get(`/getUserName/${id}`)
        const text = getdata.data.users.name
        console.log(text);
        setName(text)
    }

    // let text = name

    useEffect(() => {
        getUser();
    }, [name]);

    return (
        <>
            <div class="text-center">
                <img
                    src={image}
                    class="rounded-full mx-auto  av-img "
                    alt="Avatar"
                />
                <h5 id="name-main" class="text-xl font-medium leading-tight mb-2 h5 ">
                    <Typewriter words={[name, 'Have a great day!']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h5>
            </div>
        </>
    )
}

export default Avatar