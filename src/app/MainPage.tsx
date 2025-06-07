import AboutPage from './AboutPage';
import Skills from './Skills';
import './MainPage.css';

export default function MainPage() {

  return (
    <>
      <div id='homepage-container'>
        <img id="homepage-image" src="/homepage.png" alt="abcd" />
        <div id='container'>
          <div id='name-container'>Bipin Thapa</div>
          <div id="typing">I am a developer</div>
        </div>
      </div>
      <AboutPage />
      <Skills />
    </>
  );
}