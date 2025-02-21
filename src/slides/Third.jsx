import { useState } from "react";

import DefTab from "../ui/DefTab.jsx";
import AdditInfoTab from "../ui/AdditInfoTab.jsx";

import bottle from "./../img/slide3/bottle.png";
import bubble1 from "./../img/slide3/bubbles/1.png";
import bubble2 from "./../img/slide3/bubbles/2.png";
import bubble3 from "./../img/slide3/bubbles/3.png";
import bubble4 from "./../img/slide3/bubbles/4.png";
import bubble5 from "./../img/slide3/bubbles/5.png";
import bubble6 from "./../img/slide3/bubbles/6.png";
import bubble7 from "./../img/slide3/bubbles/7.png";
import bubble8 from "./../img/slide3/bubbles/8.png";

function Third() {
  const [additInfoIsOpen, setAdditInfoIsOpen] = useState(false);

  return (
    <div className="slide">
      <p className="text-brand-name">
        brand<strong>xy</strong>
      </p>
      {additInfoIsOpen ? (
        <AdditInfoTab setAdditInfoIsOpen={setAdditInfoIsOpen} />
      ) : (
        <DefTab setAdditInfoIsOpen={setAdditInfoIsOpen} />
      )}

      <img src={bottle} className="bottle" alt="spray bottle" />
      <img src={bubble1} className="bubble-1" alt="bubble" />
      <img src={bubble2} className="bubble-2" alt="bubble" />
      <img src={bubble3} className="bubble-3" alt="bubble" />
      <img src={bubble4} className="bubble-4" alt="bubble" />
      <img src={bubble5} className="bubble-5" alt="bubble" />
      <img src={bubble6} className="bubble-6" alt="bubble" />
      <img src={bubble7} className="bubble-7" alt="bubble" />
      <img src={bubble8} className="bubble-8" alt="bubble" />
    </div>
  );
}

export default Third;
