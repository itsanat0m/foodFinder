import QuestionBox from "./QuestionBox";
import './HomePage.css';
import { BrowserRouter, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <header>
          <div className="roundedBox header1">
            <h1>Welcome to Food Finder</h1>
          </div>
        </header>
        <main>
          <div className="ramContainer">
            <div className="speech-bubble">
              <p>Don't know where to eat? Chef Rami has got you covered</p>
            </div>
            <img className="default-ram" src="assets/ramChef.png" alt="Chef Rami" >
            </img>
          </div>
        </main>
          <Link to="/Find">
            <button>
              Start Search!
            </button>
          </Link>
      </div>
    </>
  );
}

export default HomePage;