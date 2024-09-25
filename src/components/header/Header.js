
import './header.scss';

const Header = ({className}) => {
    return (
        <section className="header">
            <div className="burger">
                <button className="burger-button">
                    <span className='burger-span'></span>
                    <span className='burger-span'></span>
                    <span className='burger-span'></span>
                </button>
            </div>
            <div className="header__logo">
                <a className="header__logo-link" href="#header">portfolio/max.</a>
                <span className="underline"></span>
            </div>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <a className={`header__nav-link ${className}`} href="#header">
                        главная
                    </a>
                </li>
                <li className="header__nav-item">
                    <a className={`header__nav-link ${className}`} href="#technologies">
                        технологии
                    </a>
                </li>
                <li className="header__nav-item">
                    <a className={`header__nav-link ${className}`} href="#project">
                        проекты
                    </a>
                </li>
                <li className="header__nav-item">
                    <a className={`header__nav-link ${className}`} href="#aboutMe">
                        обо мне
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Header;