import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from "axios"
const Pagination = () => {
    const [posts, setPosts] = useState([])
    const [postPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(data)

            } catch (error) {
                console.log(error.response.data);
            }
        }
        fetchPost();

    }, [])
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const postToDisplay = posts.slice(firstIndex, lastIndex)
    const buttons = Math.ceil(posts.length / postToDisplay.length)
    let buttonsArray = []
    for (let i = 1; i <= buttons; i++) {
        buttonsArray.push(i)
    }
    const handleClick = (index) => {
        setCurrentPage(index + 1)
    }
    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    return (
        <div className='w-full flex items-center justify-center flex-col ' >
            {
                postToDisplay.map(post => {
                    return <Post key={post.id} post={post} />
                })
            }

            {
                <div className='mb-7'>
                    <button onClick={handlePrev} className={`border  border-black px-4 py-2 rounded-l-md`} disabled={currentPage === 1}>
                        Previous
                    </button>

                    {
                        buttonsArray.map((button, index) => {
                            return <button
                                onClick={() => handleClick(index)}
                                className={`border border-black px-4 py-2  ${(index === 0) && "rounded-l-md"} 
                            ${(index === buttonsArray.length - 1) && "rounded-r-md"}
                            `} key={index} >{button}</button>
                        })
                    }
                    <button onClick={handleNext} className="border border-black px-4 py-2 rounded-r-md" disabled={currentPage === buttons}>
                        Next
                    </button>
                    <p className='ml-4' >current page : {currentPage}</p>
                </div>
            }

        </div>
    );
}

export default Pagination;
