import QuestionBox from "./QuestionBox";
import './HomePage.css';
import { BrowserRouter, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div id="header1">
        <header>
          <h1>Welcome to Food Finder</h1>
        </header>
        <main>
          <img className="default-ram" src="assets/ramChef.png" alt="Chef Rami" >
          </img>
          <p>Don't know where to eat? Chef Rami has got you covered</p>
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