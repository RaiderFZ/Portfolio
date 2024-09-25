import Header from '../header/Header';
import MainSection from '../mainSection/MainSection';
import Technologies from '../technologies/Technologies';
import Project from '../project/Project';
import AboutMe from '../aboutMe/AboutMe';
import Footer from '../footer/Footer';

import './app.scss';

function App() {
  return (
    <div className="App">
      <div className="header-box">
        <Header />
        <MainSection/>
      </div>
        <Technologies />
        <Project/>
        <AboutMe/>
        <Footer/>
    </div>
  );
}

export default App;
