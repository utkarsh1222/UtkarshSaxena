import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


function Contact() {
  return (
    <>
    <Navbar />
    <section id='header' className='d-flex'>
    <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                    <div className='text-center'>
                    <i className="fa fa-map-marker" aria-hidden="true" />  
                    <p> GL-1222 Deen Dayal Nagar</p>
                    <p> Gwalior, M.P (474020)</p>
                    </div>
                    <div className='text-center'>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <p>+91-9179341979</p>
                    </div>
                    <div className='text-center'>
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    <p>01saxenautkarsh@gmail.com</p>
                    </div>
                    
                        
                    </div>
                    
                    <div className='col-lg-6 order-1  order-lg-2 d-flex justify-content-center flex-column text-center'>
                    <div className='p-3 text-center '>
                    <a href ='https://wa.me/919179341979?text=Hi' rel="noopener noreferrer" target='_blank'><i class="fa fa-whatsapp m-3" aria-hidden="true" /></a>
                    <a href ='https://www.linkedin.com/in/utkarshsaxena01/' rel="noopener noreferrer" target='_blank'><i class="fa fa-linkedin-square m-3" aria-hidden="true" /></a>
                    <a href = "mailto: 01saxenautkarsh@gmail.com" rel="noopener noreferrer" target='_blank'><i class="fa fa-envelope m-3" aria-hidden="true" /></a>
                    <a href = "https://github.com/utkarsh1222" rel="noopener noreferrer" target='_blank'><i class="fa fa-github m-3" aria-hidden="true" /></a>
                    </div>
                    <hr className='hr'/>
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

export default Contact;