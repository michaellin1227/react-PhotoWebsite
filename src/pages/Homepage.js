import React, { useState, useEffect } from 'react'
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const [currentSearch, setCurrentSearch] = useState("");
    const auth = '3XwtP1lrL6t9Ay43AuBYk3rO442WOAU5zoYsnm19dQXkZheypgpXAtNR';
    const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=12";
    const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=1`;

    const search = async (url) => {
        setPage(2);
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                Authorization: auth,
            },
        })
        // .then(r => r.json())
        // .then(data => {
        //     console.log(data);
        // })
        const parseData = await dataFetch.json();
        setData(parseData.photos);
    }

    // fetch data when the page loads up
    useEffect(() => {
        search(initialURL);
    }, []);

    useEffect(() => {
        if (currentSearch === "") {
            search(initialURL);
        } else {
            search(searchURL);
        }
    }, [currentSearch]);

    const morepicture = async () => {
        let newURL;
        if (currentSearch === '') {
            newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page}`;
        }

        setPage(page + 1);

        // 取得Load More的資料
        const dataFetch = await fetch(newURL, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                Authorization: auth,
            },
        })
        const parseData = await dataFetch.json();
        // concat合併陣列
        setData(data.concat(parseData.photos));
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <Search
                search={() => {
                    // JS Closure
                    setCurrentSearch(input);
                }}
                setInput={setInput} />
            {data?.length > 0 ?
                <>
                    <div className='pictures'>
                        {data?.map((v) => {
                            return <Picture data={v} />;
                        })}
                    </div>

                    <div className='morePicture'>
                        <button onClick={morepicture}>Load More</button>
                    </div>
                </>
                :
                <div className='nodata'> 查無符合條件的資料 !</div>
            }
        </div>
    )
}

export default Homepage