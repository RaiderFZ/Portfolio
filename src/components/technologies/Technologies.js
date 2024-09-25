import TechnologiesBD from './TechnologiesBD';

import './technologies.scss';

const Technologies = ({className, theme}) => {
    return (
        <section className="technologies">
            <div className="technologies-container container">
                <h2 className="technologies-title">ТЕХНОЛОГИИ</h2>
                <div className="technologies__grid">
                    {TechnologiesBD.map((item, i) => {
                        const imageSrc = (theme === 'dark' && item.urlW) ? item.urlW : item.url;
                        return (
                            <div className="technologies__grid-item" key={i}>
                                <img
                                 className="technologies__grid-image" alt={item.technologies}
                                 src={imageSrc}>
                                </img>
                                <span className="technologies__grid-text">
                                    {item.technologies}
                                </span>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}

export default Technologies;