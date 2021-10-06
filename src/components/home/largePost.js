import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const largePost = () => {
    return (
        <>
            <div className='large_post'>
                <div className='large_post_img'>
                    <img className='post_img' src='https://pocket-syndicated-images.s3.amazonaws.com/5f4012e32fafa.jpg' alt='Post image' />
                </div>
                <div className='large_post_text'>
                    <Link to='/post/:id'><h1 className='post_heading'>The Myth of ‘Bloody Mary’</h1></Link>
                    <p className='post_excrept'>History remembers the English queen as a murderous monster, but the real story of Mary I is far more nuanced.</p>
                    <span class='post_tag'>Featured</span>
                </div>
            </div>
            <hr />
        </>
    );
}

export default largePost;
