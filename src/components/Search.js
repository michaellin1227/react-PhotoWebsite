import React, { useState } from 'react'

const Search = ({ search, setInput }) => {

    const handelInput = (e) => {
        const inputVal = e.target.value;
        setInput(inputVal);
    }

    return (

        <div className='search'>
            <div>
                <input type='text' onChange={handelInput} placeholder='請輸入查詢文字...' />
                <button onClick={search}>Search</button>
            </div>
            <p>ex. cake bike ball etc.</p>
        </div>

    )
}

export default Search