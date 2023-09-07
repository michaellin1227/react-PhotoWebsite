import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BiNote, BiLogoReact } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

const About = () => {
    return (
        <div className='about' style={{ minHeight: '100vh' }}>
            <div>
                <h1>Author</h1>
                <p><BsFillPersonFill /> Michael Lin</p>
                <p><MdEmail /> michaellin5027@gmail.com</p>
            </div>
            <div>
                <h1>Source / Skills</h1>
                <p><BiNote /> Pexels API</p>
                <p><BiLogoReact /> React JS 、 fetch 、 RESTful API</p>
                <p><FaListCheck /> 串接Open API、關鍵字搜尋、查看更多(展開頁面)</p>
            </div>
        </div>
    )
}

export default About