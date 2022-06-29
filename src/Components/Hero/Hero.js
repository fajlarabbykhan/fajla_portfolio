import React from 'react';
import './Hero.css'
import profilepic from "../Assets/hero.png"
import profilepic2 from "../Assets/profile.jpg"
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>WELCOME</h3>
                        <h1>Hi, This is <span>Fajla Rabby Khan</span></h1>
                        <h2>
                            <span>
                                <Typewriter
                                    words={['a Professional Front-end Developer.', 'a coder.']}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente dolor sed culpa odit officiis? Doloremque voluptatum officiis, beatae minima, laboriosam iusto repudiandae reiciendis sit totam velit est iure excepturi!</p>

                        <div className="hero_btn d_flex">
                            <div className="col_1">
                                <h4>FIND WITH ME</h4>
                                <div className="button">
                                    <button className='btn_shadow home-btn'>
                                        <i className='fa fa-linkedin'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fa fa-github home-btn'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fa fa-facebook home-btn'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_img">
                            <img src={profilepic} alt="" />
                        </div>
                    </div>
                </div>


            </section>

        </>
    );
};

export default Hero;