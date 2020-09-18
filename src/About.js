import React from 'react';
import Navbar from './Navbar';
import aboutImg from './images/about-img.png';
import sololearn from './images/sololearn.jpg';
import { NavLink } from 'react-router-dom';
import Card from './Card';
import Projects from './Projects';
import Certificates from './Certificates';
import Footer from './Footer';


function About() {
  return (
    <>
    <Navbar />
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-center'>
                        <h1>Hi,</h1>
                        <h2 className='my-3'>I'm a <strong className='brand-name'>software engineer / developer </strong>. I have a passion for writing code and love to create web applications.</h2>
                        <div className='mt-3'>
                            <NavLink exact to='/contact' className='btn btn-know-more'>Contact Me</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={aboutImg} className='img-fluid animated' alt={aboutImg} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className='my-5' id='proj'>
            <h1 className='text-center'><strong className='brand-name'> Projects</strong></h1>
        </div>
        <div className='container mt-2 mb-5 '>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        {Projects.map((data,index)=>{
                            return(
                            <div className='col-md-4 col-10 mx-auto my-2' key={index} >
                            <Card 
                               title={data.title} 
                               img={data.image} 
                               description={data.description} 
                               link={data.link} 
                               ind={index}
                                />
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className='my-5' id='proj'>
            <h1 className='text-center'><strong className='brand-name'> Certificates</strong></h1>
        </div>
        <div className='container mt-2 mb-5 '>
            <div className='row'>
                <div className='col-10 col-md-6 mx-auto'>
                    <div className='row'>
    <Certificates />
    </div>
    </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default About;