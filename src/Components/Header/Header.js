import React, { useState } from 'react';
import './Header.css'
const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)

    })

    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="logo">
                        <a href="#home" className='logo'>Fajla Rabby Khan</a>
                    </div>
                    <div className="navitmes">
                        {/* <ul className="items f_flex uppercase"> */}
                        <ul className={Mobile ? "nav-items-mobile" : "items f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#blogs">Blogs</a></li>
                            <li><a href="#contact">Contact</a></li>
                            {/* <li><button className='home-btn'>Buy Now</button></li> */}

                        </ul>
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fa fa-times close home-btn'></i> : <i className='fa fa-bars open '></i>}


                        </button>
                    </div>

                </div>

            </header>
            <section className='demo'>

            </section>
        </>
    );
};

export default Header;