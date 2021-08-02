import React from 'react';

export default class Home1 extends React.Component{
  render(){
    return (
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="index.css" />
        <title>Free Online Digital Diary | Scribble</title>
        <link rel="icon" href="icon.png" type="image/x-icon" />
        {/* NavBar Start */}
        <div className="Container-sm">
          <div className="
          d-flex
          bd-highlight
          mb-3
          navbar navbar-expand-lg navbar-light
          sticky-top
        " style={{backgroundColor: '#00caef'}}>
            <div className="me-auto p-2 bd-highlight">
              <a className="navbar-brand" style={{fontSize: 'x-large', color: 'white'}} href="index.html">
                <img width="40px" height="40px" src={'./src/images/icon.png'} alt="" />
                Scribble</a>
            </div>
            <div className="p-2 bd-highlight">
              <button type="button" className="btn btn-info" onclick="window.location.href='login.html'" style={{color: 'white'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Login
              </button>
              <button type="button" className="btn btn-info" onclick="window.location.href='signup.html'" style={{color: 'white'}}>
                SignUp
              </button>
            </div>
          </div>
          {/* NavBar End */}
          {/* Carousel Start */}
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="7.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="4.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Carousel End */}
          <hr />
          {/* Body Containt Start 1 */}
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <h3>Sanctuary for Your Mind &amp; Soul</h3>
              </div>
            </div>
          </div>
          <div className="container" style={{textAlign: 'justify'}}>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>
                  Join millions of Scribble users and create a healthier, happier
                  mind. A sanctuary for your mind and soul, Scribble will help
                  increase your positive energy, be more grateful and a calmer mind by
                  building healthy thinkings through journaling.
                </p>
                <p>
                  We're more than just a journal, or a diary; we're your own
                  motivational coach and happiness trainer. Let's embark on a fabulous
                  journey of self-improvement today.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <h3>Meet Scribble, Your Self-Care Journal</h3>
              </div>
            </div>
          </div>
          <div className="container" style={{textAlign: 'justify'}}>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>
                  In the midst of the hustle and bustle of daily living, there is an
                  indisputable need to keep a diary. Our minds also build up tons of
                  emotions and our creativity comes alive. With so much bubbling
                  within us, we have to let our thoughts and emotions flow into
                  written or spoken words, not to mention the need to set reminders
                  for upcoming events.
                </p>
                <p>
                  To meet this need, digital diary – Scribble© was created and
                  since its invention, it has been nothing but incredible. If Scribble
                  or the concept of a digital diary is novel to you, you might want to
                  continue reading!
                </p>
              </div>
            </div>
          </div>
          {/* Body Containt End 1 */}
          <br />
          {/* Body Containt Start 2 */}
          <div className="row">
            <div className="col-md-6 offset-md-5">
              <h3>What is a diary?</h3>
            </div>
          </div>
          <div className="container" style={{textAlign: 'justify'}}>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>
                  Diaries are a record of entries that describe your life over a
                  period of time typically on a daily basis. A journal is a place
                  where you can be honest with yourself and jot down your thoughts and
                  reflections from things that happened around you; free from outside
                  judgement and criticism. In a diary, you can record things like your
                  observations, experiences, likes or dislikes, events, adventures and
                  many more. Anything that you wish to record can be written in a
                  diary.
                </p>
              </div>
            </div>
          </div>
          <img width={1150} height={500} src="https://source.unsplash.com/1150x500/?diary" alt="" style={{margin: 'auto 50px auto 190px'}} />
          {/* Body Containt End 2 */}
          {/* Cards Start */}
          <br /><br /><br />
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <h3>What are the types of diary</h3>
              </div>
            </div>
          </div>
          <div className="Container">
            <div className="row m-5">
              <div className="col p-5">
                <img width="50px" height="300px" src="https://source.unsplash.com/500x500/?diary" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Travel Diary</h5>
                  <p className="card-text">
                    Travel diary, or also known as Travelogue, are records written about the travel experiences.
                  </p>
                </div>
              </div>
              <div className="col p-5">
                <img width="50px" height="300px" src="https://source.unsplash.com/500x500/?diary, diary" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Morning Pages</h5>
                  <p className="card-text">
                    Write in stream of consciousness style first thing in the morning in morning pages.
                  </p>
                </div>
              </div>
              <div className="col p-5">
                <img width="50px" height="300px" src="https://source.unsplash.com/500x500/?diary, diary, diary" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Creative Writing Diary</h5>
                  <p className="card-text">
                    A creative writing diary records poems, stories, songs and other artistic records that have crossed the
                    mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Cards End */}
          {/* Body Containt Start 3 */}
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <h3>Why do people keep diaries?</h3>
              </div>
            </div>
          </div>
          <div className="container" style={{textAlign: 'justify'}}>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <br />
                <p>
                  Much more than the love of writing, people keep diaries for various reasons. Here are some:
                </p>
                <br />
                <h5>1. Express Thoughts</h5>
                <br />
                <p>Diaries are your secret companion and a place where you can be honest with yourself. You can vent out
                  bottled up emotions and toxic thoughts that stayed with you. There are times you may feel that you cannot be
                  entirely honest with someone. By writing in a diary and treating it as if you are talking to a close friend,
                  your thoughts and secrets stay with you forever.</p>
                <br />
                <h5>2. Track Sleep Routine</h5>
                <br />
                <img width="1000px" height="600px" src="https://journey.cloud/content_assets/diary/dreamy-night-sky-with-clouds.jpg" alt="" />
                <br />
                <br />
                <p>Keeping a daily dream journal can also be an easy and fun way to help you identify recurring patterns,
                  trends and dream symbols, as well as improving your ability to continually remember more dream details, and
                  pointing you towards an aspect of your life that may need some extra attention.</p>
                <br />
                <h5>3. Keep Memories Safe</h5>
                <br />
                <p>Memories fade with time, thus noting down the things that happened in life could be an excellent way to
                  keep your memories safe. We all have to agree that not all memories are positive, but wouldn’t you have to
                  admit that the negative ones are also the ones that make us stronger as we learn from our past mistakes?
                  Thus, writing down adverse events may not be as bad as we thought.</p>
                <br />
                <h5>4. Pen down &amp; Celebrate Achievements</h5>
                <br />
                <img width="1000px" height="600px" src="https://journey.cloud/content_assets/diary/small-silhouette-tourist-with-raised-arms-rocky-formation.jpg" alt="" />
                <br /> <br />
                <p>Having a bucket list within your diary can also be something satisfying to look back on, especially when
                  you have achieved something that you have always wanted. Have you ever had something that you have always
                  wanted, but you know that it will take time to accomplish this dream? You can also track your progress in
                  your diary. This may also help you to reflect on and think about the next step you should take to achieve
                  your goal too!</p>
              </div>
            </div>
          </div>
          {/* Body Containt End 3 */}
          {/* Body Containt Start 4 */}
          <div className="container" style={{textAlign: 'justify'}}>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <br />
                <h6>A diary is essentially a space for you to write and document about your daily
                  life. With a reliable diary
                  software like Scribble, it can guide you to write any type of diary based on your preference as different
                  types of diaries serve different purposes.</h6>
                <br />
              </div>
            </div>
          </div>
          {/* Body Containt End 4 */}
          {/* Footer */}
          <footer className="page-footer sticky-bottom font-small special-color-dark pt-4" style={{backgroundColor: '#272727'}}>
            {/* Footer Elements */}
            <div className="container" />
            {/* Footer Elements */}
            {/* Copyright */}
            <div className="footer-copyright text-center py-3" style={{color: 'white'}}>
              © 2021 Copyright : Scribble
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
          {/* Optional JavaScript; choose one of the two! */}
          {/* Option 1: Bootstrap Bundle with Popper */}
          {/* Option 2: Separate Popper and Bootstrap JS */}
          {/*
    
    
    */}
        </div></div>
    );
  }
}