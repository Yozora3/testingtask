import buttonNext from "../img/button/next.png";

import img_1_1 from "../img/slide1/bacterias/img-1-1.png";
import img_1_2 from "../img/slide1/bacterias/img-1-2.png";
import img_1_3 from "../img/slide1/bacterias/img-1-3.png";
import img_1_4 from "../img/slide1/bacterias/img-1-4.png";
import img_1_5 from "../img/slide1/bacterias/img-1-5.png";
import img_1_6 from "../img/slide1/bacterias/img-1-6.png";
import img_1_7 from "../img/slide1/bacterias/img-1-7.png";
import img_1_8 from "../img/slide1/bacterias/img-1-8.png";
import img_1_9 from "../img/slide1/bacterias/img-1-9.png";

// eslint-disable-next-line react/prop-types
function First({ handleNavToSecond, ref }) {
  return (
    <div ref={ref} className="slide slide-1">
      <div className="sld-1-container">
        <h3 className="text-title">Привет,</h3>
        <h1>
          Это <strong>не</strong> коммерческое задание
        </h1>
      </div>
      <button className="btn btn-next" onClick={handleNavToSecond}>
        <img src={buttonNext} alt="next page" />
      </button>

      <img src={img_1_1} className="img-1-1" alt="bacteria" />
      <img src={img_1_2} className="img-1-2" alt="bacteria" />
      <img src={img_1_3} className="img-1-3" alt="bacteria" />
      <img src={img_1_4} className="img-1-4" alt="bacteria" />
      <img src={img_1_5} className="img-1-5" alt="bacteria" />
      <img src={img_1_6} className="img-1-6" alt="bacteria" />
      <img src={img_1_7} className="img-1-7" alt="bacteria" />
      <img src={img_1_8} className="img-1-8" alt="sperm" />
      <img src={img_1_9} className="img-1-9" alt="sperm" />
    </div>
  );
}

export default First;
