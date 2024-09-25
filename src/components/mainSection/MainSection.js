
import mainLogo from '../../image/logo.svg';
import './mainSection.scss';

const MainSection = () => {
    return (
        <section className="main">
            <div className="main-container container">
                <h2 className="main-title">Max Kononerov</h2>
                <img className="main-logo" src={mainLogo} alt="" />
                <h2 className="main-subtitle">front-end.web(developer)</h2>
            </div>
        </section>
    )
}

export default MainSection;