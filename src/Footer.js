import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    const year = new Date().getFullYear();
    return(
        <>
        <footer className='bg-light text-center fixed-bottom'>
    <p>&#169;{year} <Link to='/' className='text-muted'> Utkarsh Saxena</Link>. All Rights Reserved | Terms and Conditions</p>
        </footer>
        </>
    )
}

export default Footer;