import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [screenWidth, setScreenWidth] = useState(true)
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    }
    const handleResize = () => {
        if (window.innerWidth > 743) {
            setScreenWidth(true);
        }
        else {
            setScreenWidth(false);
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

    }, [])
    return (
        <div>
            <Navbar2 top={
                screenWidth ?
                    scrollPosition > 100 ? '0px' : '-200px' : '0px'
            } />

            {
                screenWidth && <Navbar />
            }



        </div>
    );
};

export default Header;