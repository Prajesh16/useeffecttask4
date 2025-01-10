import { color } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ to }) => {
  const navigate = useNavigate();
  const gotToAbout = () => {
    navigate("/about");
  };
  const gotToContact = () => {
    navigate("/contact");
  };
  const myStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "5px",
    margin: "5px",
  };

  return (
    <>
      <div>Home</div>
      <button onClick={() => gotToAbout()} className="about" style={myStyle}>
        Go to About Page
      </button>
      <button
        onClick={() => gotToContact()}
        className="contact"
        style={myStyle}
      >
        Go to Contact Page
      </button>
    </>
  );
};

export default Home;
