import logo from './logo.svg'
import './App.css'
import MovieList from './MovieList/MovieList'

function App() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Netflix</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="wrapper">
        {/* HEADER */}
        <header>
          <div className="netflixLogo">
            
            <a id="logo" href="#home">
              <img
                src="https://res.cloudinary.com/habibii/image/upload/v1655071215/Sans_titre-1_oecqdf.jpg"
                alt="Logo Image"
              />
            </a>
          </div>
          <nav className="main-nav">
            <a href="#home">Home</a>
            <a href="#tvShows">TV Shows</a>
            <a href="#movies">Movies</a>
            <a href="#originals">Originals</a>
            <a href="#">Recently Added</a>
            <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">
              Portfolio
            </a>
          </nav>
          <nav className="sub-nav">
            <a href="#">
              <i className="fas fa-search sub-nav-logo" />
            </a>
            <a href="#">
              <i className="fas fa-bell sub-nav-logo" />
            </a>
            <a href="#">Account</a>
          </nav>
        </header>
        {/* END OF HEADER */}
        {/* MAIN CONTAINER */}
        <section className="main-container">
          <MovieList />

          {/* END OF MAIN CONTAINER */}
          {/* LINKS */}
          <section className="link">
            <div className="logos">
              <a href="#">
                <i className="fab fa-facebook-square fa-2x logo" />
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-2x logo" />
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-2x logo" />
              </a>
              <a href="#">
                <i className="fab fa-youtube fa-2x logo" />
              </a>
            </div>
            <div className="sub-links">
              <ul>
                <li>
                  <a href="#">Audio and Subtitles</a>
                </li>
                <li>
                  <a href="#">Audio Description</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </section>
          {/* END OF LINKS */}
          {/* FOOTER */}
          <footer>
            <p>© 1997-2018 Netflix, Inc.</p>
            <p>Carlos Avila © 2018</p>
          </footer>
        </section>
      </div>
    </div>
  )
}

export default App
