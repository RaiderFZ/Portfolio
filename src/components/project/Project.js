import ProjectDB from './ProjectDB';

import './project.scss';

const Project = () => {
    return (
        <section className="project">
            <div className="project-container container">
                <h2 className="project-title">Проекты</h2>
                <div className="project-wrap">
                    <div className="project__buttons">
                        <button className="project__buttons-item">
                            Верстка
                        </button>
                        <button className="project__buttons-item">
                            React/JS
                        </button>
                        <button className="project__buttons-item">
                            Wordpress
                        </button>
                    </div>
                    <div className="project__grid">
                        {ProjectDB.map((item, i)=> {
                            return (
                                <div className="project__grid-item" key={i}>
                                    <img className="project__grid-image" src={item.image} alt={item.name}/>
                                    <h3 className="project__grid-title">{item.name}</h3>
                                    <div className="project__grid-box">
                                        <div className="project__grid-wrap">
                                            <a 
                                                className="project__grid-link code" 
                                                href={item.urlCode}>
                                                    посмотреть код
                                            </a>
                                            <span className="underline"></span>
                                        </div>
                                        <div className="project__grid-wrap">
                                            <a 
                                            className="project__grid-link view" 
                                            href={item.urlView}>
                                                посмотреть вживую
                                            </a>
                                            <span className="underline"></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;