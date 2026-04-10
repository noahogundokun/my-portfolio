import React from "react";
import "./Home.css";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <div className="home">
      <img src={heroImage} alt="Hero" />
      <h2>
        <span>Hello, I'm Noah Ayo</span>
      </h2>
      <p>A passionate Web developer creating clean and functional design</p>
      <div className="home-buttons">
        <button
          className="btn"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>
        <button
          className="btn"
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          contact Me
        </button>
      </div>
    </div>
  );
}
export default Home;
