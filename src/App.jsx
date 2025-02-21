import { useRef, useState } from "react";

import First from "./slides/First.jsx";
import Second from "./slides/Second.jsx";
import Third from "./slides/Third.jsx";

import logo from "./img/logo.png";
import homebtn from "./img/homebtn.png";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  const refFirst = useRef(null);
  const refSecond = useRef(null);

  const handleNavToFirst = () =>
    refFirst.current.scrollIntoView({ behavior: "smooth" });
  const handleNavToSecond = () => {
    console.log("click");
    refSecond.current.scrollIntoView({ behavior: "smooth" });
  };

  // better to use external libraries for react intersection
  function handleTouch() {
    const slide2 = document.querySelector(".slide-animated");
    const slide1 = document.querySelector(".slide-1");

    const observer = new IntersectionObserver(
      (el) => {
        if (el.at(0).intersectionRatio > 0.9) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.9 }
    );
    const observerRemove = new IntersectionObserver(
      (el) => {
        if (el.at(0).intersectionRatio > 0.9) {
          setIsAnimated(false);
        }
      },
      { threshold: 0.9 }
    );
    observer.observe(slide2);
    observerRemove.observe(slide1);
  }

  return (
    <>
      <div
        className="slides"
        onTouchEnd={() => handleTouch()}
        // onMouseDown={() => handleTouch()}
      >
        <First handleNavToSecond={handleNavToSecond} ref={refFirst} />
        <Second ref={refSecond} isAnimated={isAnimated} />
        <Third />
      </div>
      <img src={logo} alt="logo" className="logo" />
      <button className="btn btn-home" onClick={handleNavToFirst}>
        <img src={homebtn} alt="home button" />
      </button>
    </>
  );
}

export default App;
