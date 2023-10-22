import { useState } from "react";

import "./App.css";
import TopNavBar from "./componats/topNavBar";
import NavBar from "./componats/navBar/navBar";

function App() {
  // const objects = [
  //   {
  //     image: git,
  //     heading: "Breakfast",
  //     down: "In the new era of technology we look in the future with certainty and pride for our life.",
  //     bottom: "Explore Menu",
  //   },
  //   {
  //     image: insta,
  //     heading: "Main Dishes",
  //     down: "In the new era of technology we look in the future with certainty and pride for our life.",
  //     bottom: "Explore Menu",
  //   },
  //   {
  //     image: facebooke,
  //     heading: "Drinks",
  //     down: "In the new era of technology we look in the future with certainty and pride for our life.",
  //     bottom: "Explore Menu",
  //   },
  //   {
  //     image: tweet,
  //     heading: "Desserts",
  //     down: "In the new era of technology we look in the future with certainty and pride for our life.",
  //     bottom: "Explore Menu",
  //   },
  // ];

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="appMain">
        <TopNavBar />
        <NavBar />
        <section className="back">
          <div className="textRap">
            <h1>Best food for your taste</h1>
            <h2>
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </h2>
            <div className="btnRap">
              <button>Book A Table</button>
              <button>Explore Menu</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
