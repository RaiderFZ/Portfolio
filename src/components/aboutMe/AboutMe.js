
import profile from '../../image/profile.png';
import './aboutMe.scss';

const AboutMe = () => {
    return (
        <section className="about">
            <div className="about-container container">
                <h2 className="about-title">Обо мне</h2>
                <div className="about__wrap">
                    <img className="about__wrap-img" src={profile} alt="profile" />
                    <div className="about__wrap-box">
                        <p className="about__wrap-text">Привет! Я — веб-разработчик, увлечённый созданием качественных и эстетичных веб-сайтов. Стремлюсь к чистоте кода используя методологию БЭМ для структурирования CSS/HTML. Предпочитаю работать с чистым кодом, применяю современные технологии, такие как React и Vue.<br/>
                        Работаю с Gulp, Git и GitHub для управления проектами. В настоящее время я фокусируюсь на React и Vue, прохожу онлайн-курсы и активно практикуюсь в разработке проектов.
                        </p>
                        <ul className="about__list">
                            <li className="about__list-item">
                                <a className="about__list-link" href="https://t.me/RaiderFZ">
                                    telegram
                                </a>
                                <span className="underline"></span>
                            </li>
                            <li className="about__list-item">
                                <a className="about__list-link" href="https://kwork.ru/user/raiderfz">
                                    kwork
                                </a>
                                <span className="underline"></span>
                            </li>
                            <li className="about__list-item">
                                <a className="about__list-link" href="blank">
                                    instagram
                                </a>
                                <span className="underline"></span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe;