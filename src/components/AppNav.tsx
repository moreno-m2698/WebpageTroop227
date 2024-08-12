import { useEffect, useState } from 'react';

import { Link } from "react-router-dom"
import "../styles/global/nav.css"
import WLogo from "../assets/logo-white.png"

export default function AppNav() {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<number>(0); // 'up' or 'down'
    

    //TODO: double check tomorrow
    //debouner is non-responsive/it just disappears from page functionality

    const eventDebounce = (cb: any, delay: number = 1000 / 60) => {
        let timeout = setTimeout(cb, delay); //Performs my function after a delay

        return () => {
            clearTimeout(timeout); //clears out timeout variable
        
            timeout = setTimeout(() => { //reinstantiates a new callback to timeout var to complete cycle
                cb();
            }, timeout)
        }
    }

    const handleScroll = (): void => {

        const scrollTop = window.scrollY; //returns number of pixels that the window is scrolled vertially
    
        if (scrollTop > lastScrollTop) {
            console.log('down')
          setScrollDirection(-1);
        } else if (scrollTop < lastScrollTop) {
            console.log('up')
          setScrollDirection(1);
        }
        setLastScrollTop(scrollTop); //resets last scroll amount
      };
    
      useEffect(() => {
        window.addEventListener('scroll', eventDebounce(handleScroll));
        return () => {
          window.removeEventListener('scroll', eventDebounce(handleScroll));
        };
      }, [lastScrollTop]);



    return (
        <header className={"troop227-header".concat(" ", scrollDirection >= 0 ? "" : "hide")}>
            <div className='troop227-header__logo' aria-roledescription="logo">
              <img src="https://www.scouting.org/wp-content/uploads/2022/06/bsa-logo-hero-1.png" alt="Boy Scout Logo White Transparent"/>
              <h1 className='troop227-header__title' data-mobile-only="">Troop 227</h1>
              <h1 className='troop227-header__title' data-desktop-only="">Boy Scout Troop 227<span>American Legion Post 205</span></h1>
            </div>
            <div className='troop227-header__nav troop227-header__nav-button'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 32 32">
                <path stroke="#fff" strokeWidth="1.5" d="M32 7.683H0m32 7.734H0m32 7.733H0"></path>
              </svg>
            </div>
            <nav className='troop227-header__nav' data-desktop-only="">
                <ul className='troop227-header__list'>
                    <li className='troop227-header__list-item'>
                        <Link className={"troop227-header__link"} to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link className={"troop227-header__link"} to={`/projects`}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
    
    
}

