import { useState } from "react";

import buttonX from "./../img/button/buttonX.png";
import buttonArrow from "./../img/button/buttonArrow.png";
import iconPage from "./../img/button/iconPage.png";

//2d array for non repetiveness
const pageContent = [
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Faucibus pulvinar elementum integer enim",
    "Faucibus pulvinar elementum integer enim",
  ],
  [
    "Mi bibendum neque egestas congue quisque egestas diam",
    "Venenatis lectus magna fringilla urna",
    "Venenatis lectus magna fringilla urna",
  ],
];

// eslint-disable-next-line react/prop-types
function AdditInfoTab({ setAdditInfoIsOpen }) {
  const [activePage, setActivePage] = useState(0);
  const pageIndicatorStyle =
    activePage === 1 ? { transform: "rotate(180deg)" } : null;

  return (
    <div className="background-dark">
      <div className="addit-info-container">
        <h3 className="text-title">Преимущества</h3>

        <div className="addit-info-list">
          {pageContent[activePage].map((el, i) => (
            //0 + 0 * 3 + 1
            <div key={i + activePage * 3 + 1}>
              <span className="item-number">{`0${
                i + activePage * 3 + 1
              }`}</span>
              <p>{el}</p>
            </div>
          ))}
        </div>

        <div className="btn-page-box">
          <button
            className="btn btn-arrow btn-left"
            onClick={() => setActivePage(0)}
          >
            <img src={buttonArrow} alt="left arrow" />
          </button>
          <img src={iconPage} alt="current page" style={pageIndicatorStyle} />
          <button className="btn btn-arrow" onClick={() => setActivePage(1)}>
            <img src={buttonArrow} alt="right arrow" />
          </button>
        </div>
        <button
          className="btn btn-close"
          onClick={() => setAdditInfoIsOpen(false)}
        >
          <img src={buttonX} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default AdditInfoTab;
