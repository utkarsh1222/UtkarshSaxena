import React from 'react';
import Navbar from './Navbar';
import headerImg from './images/header-img.png'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  return (
    <>
    <Navbar />
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-center'>
                        <h1>Hey, I'm <strong className='brand-name'>Utkarsh</strong></h1>
                        <h2 className='my-3'>Full Stack Developer</h2>
                        <div className='mt-3'>
                            <NavLink exact to='/about' className='btn btn-know-more'>Know more</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={headerImg} className='img-fluid animated' alt={headerImg} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default Home;
