import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [screenWidth, setScreenWidth] = useState()
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    }
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);
    }, [])


    console.log(screenWidth)
    return (
        <div>
            <Navbar2 top={
                screenWidth > 743 ?
                    scrollPosition > 100 ? '0px' : '-200px' : '0px'
            } />

            {
                screenWidth > 743 && <Navbar />
            }



        </div>
    );
};

export default Header;