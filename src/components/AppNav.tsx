import { Link } from "react-router-dom"
import "../styles/global/nav.css"

export default function AppNav() {

  return (
    <header className="troop227-header">
      <div className='troop227-header__logo' aria-roledescription="logo">
        <img src="https://www.scouting.org/wp-content/uploads/2022/06/bsa-logo-hero-1.png" alt="white and transparent boy scout logo"/>
        <h1 className='troop227-header__title' data-mobile-only="">Troop 227</h1>
        <h1 className='troop227-header__title' data-desktop-only="">Boy Scout Troop 227<span>American Legion Post 205</span></h1>
      </div>
      <nav className='troop227-header__nav' aria-label="Site Navigation">
        <ul className='troop227-header__list'>
          <li className='troop227-header__list-item'>
            <Link className={"troop227-header__link"} to={`/`}>Home</Link>
          </li>
          <li className='troop227-header__list-item'>
            <Link className={"troop227-header__link"} to={`/projects`}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header> 
  );
}

