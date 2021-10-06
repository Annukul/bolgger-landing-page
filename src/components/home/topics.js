import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const topics = () => {
    return (
        <div className='discover_topics'>
            <h2 className='topics_heading'>Discover more topics</h2>
            <div className='topics'>
                <Link className='topic' to=''>Business</Link>
                <Link className='topic' to=''>Travel</Link>
                <Link className='topic' to=''>Startup</Link>
                <Link className='topic' to=''>Finance</Link>
                <Link className='topic' to=''>Motor</Link>
                <Link className='topic' to=''>Sports</Link>
                <Link className='topic' to=''>Adventure</Link>
                <Link className='topic' to=''>Nature</Link>
                <Link className='topic' to=''>Lifestyle</Link>
                <Link className='topic' to=''>Productivity</Link>
                <Link className='topic' to=''>Books</Link>
                <Link className='topic' to=''>Literature</Link>
                <Link className='topic' to=''>Writing</Link>
                <Link className='topic' to=''>Climate change</Link>
                <Link className='topic' to=''>Science</Link>
                <Link className='topic' to=''>Politics</Link>
                <Link className='topic' to=''>Technology</Link>
                <Link className='topic' to=''>Food</Link>
            </div>
        </div>
    )
}

export default topics;
