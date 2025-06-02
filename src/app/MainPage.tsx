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
      <div id='about-page'>
        <div id='about-page-intro'>
          <h2 id='about-page-intro-head'>
            About
          </h2>
          <div>
            My name is Bipin Thapa.
          </div>
        </div>
        <div id='about-page-body'>
          <div id='about-page-body-image-container'>
            <img id='about-page-body-image' src="profile-cropped.jpg" alt="" />
          </div>
          <div id='about-page-body-content-container'>
            <div id='about-page-body-content-header'>
              Full Stack Developer & Data Scientist(Learning).
            </div>
            <div id='about-page-body-content-1'>
              Test Text
            </div>
          </div>
        </div>
      </div>
    </>
  );
}