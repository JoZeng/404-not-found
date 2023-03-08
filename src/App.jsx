import "./App.css";
import Scarecrow from "./assets/Scarecrow.png"

export default function App() {
  return (
    <div className="app">
      <div className="container">
      <div className="container-card1">
      <h3>404 NOT FOUND</h3>
      <img src={Scarecrow} alt="scarecrow" />
      </div>
      <div className="container-card2">
        <h1>
          I have bad news<br></br> for you
        </h1>
        <span>
          The page you are looking<br></br> for might be removed or is <br></br>
          temporarily unavailable
        </span>
        <button>BACK TO HOMEPAGE</button>
      </div>
      </div>
      <footer>created by <a href="https://github.com/JoZeng">JoZeng</a> - devChallenges.io</footer>
    </div>
    
  );
}
