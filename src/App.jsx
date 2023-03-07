import "./App.css";
import scarecrow from "./assets/scarecrow.png"

export default function App() {
  return (
    <div className="app">
      <div className="container">
      <div className="container-card1">
      <h3>404 NOT FOUND</h3>
      <img src={scarecrow} alt="scarecrow" />
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
      <footer>created by JoZeng - devChallenges.io</footer>
    </div>
    
  );
}
