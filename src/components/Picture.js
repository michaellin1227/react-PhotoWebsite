import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";

const Picture = ({ data }) => {
    return (
        <div className='picture'>
            <p className='photographer'><BsFillPersonFill />{data.photographer}</p>
            <div className='imgContainer '>
                <img src={data.src.large} alt=''></img>
            </div>
            <p>Download Image :
                <a target="_blank" href={data.src.large}> Click Here!</a>
            </p>
        </div>
    )
}

export default Picture