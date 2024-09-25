
import './footer.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer__logo">
                    <a className="footer__logo-link" href="#header">PORTFOLIO/MAX.</a>
                    <span className="underline"></span>
                </div>
                
                <span className="footer-rights"> ©2024 Max Kononerov. Все права защищены</span>
            </div>
        </section>
    )
}

export default Footer;