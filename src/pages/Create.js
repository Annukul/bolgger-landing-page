import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Create = () => {
    return (
        <>
            <Navbar />
            <div className='create_post'>
                <form className='create_post_form'>
                    <div className='form_up'>
                        <div className='form_controls'>
                            <label className='label' for='title'>Title</label>
                            <input type='text' name='title' id='title' />
                        </div>
                        <div className='form_controls'>
                            <label className='label' for='excrept'>Excrept</label>
                            <input type='text' name='excrept' id='excrept' />
                        </div>
                    </div>
                    <div className='form_down'>
                        <div className='form_controls'>
                            <label className='label' for='category'>Category</label>
                            <input type='text' name='category' id='category' />
                        </div>
                        <div className='form_controls'>
                            <label className='label' for='body'>Body</label>
                            <textarea name='body' id='body'></textarea>
                        </div>
                    </div>
                    <button type='button' className='submit_btn'>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Create;
