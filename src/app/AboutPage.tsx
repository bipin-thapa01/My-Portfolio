import "./MainPage.css"

export default function AboutPage() {
  return (
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
          <div id='about-page-body-content-2'>
            <div id='about-page-body-content-2-1'>
              <div className='about-page-details'>
                <span id='list-content-title'>Birthday:</span> 4 Aug 2005
              </div>
              <div className='about-page-details'>
                <span id='list-content-title'>Website:</span>
              </div>
              <div className='about-page-details'>
                <span id='list-content-title'>Phone:</span> +977 9742549312
              </div>
              <div className='about-page-details'>
                <span id='list-content-title'>City:</span> Kathmandu, Nepal
              </div>
            </div>
            <div id='about-page-body-content-2-2'>
              <div className='about-page-details'>
                <span id='list-content-title'>Age:</span> 19
              </div>
              <div className='about-page-details'>
                <span id='list-content-title'>Degree:</span> Bacheor(Ongoing)
              </div>
              <div className='about-page-details'>
                <span id='list-content-title'>Email:</span> yukichin638@gmail.com
              </div>
              <div className='about-page-details'>
                <span id='list-content-title'>Freelance:</span> Available
              </div>
            </div>
          </div>
          <div id="about-page-body-content-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero temporibus eius nulla modi obcaecati unde est deleniti illum in debitis ex, veniam sequi autem minus voluptates voluptas necessitatibus fuga perferendis.
          </div>
        </div>
      </div>
    </div>
  );
}