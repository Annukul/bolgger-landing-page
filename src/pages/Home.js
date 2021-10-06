import React from 'react';

import Navbar from '../components/navbar';
import LargePost from '../components/home/largePost';
import TopPosts from '../components/home/topPosts';
import Topics from '../components/home/topics';
import Stories from '../components/home/stories';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <LargePost />
                <TopPosts />
                <Topics />
                <Stories />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
