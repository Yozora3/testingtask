import iconPlate from "./../img/icon/plate.png";
import iconCalendar from "./../img/icon/calendar.png";
import buttonMoreInfo from "./../img/button/moreInfo.png";

function defTab({ setAdditInfoIsOpen }) {
  return (
    <div className="sld-3-text-box">
      <h3 className="text-title">Ключевое сообщение</h3>

      <div className="sld-3-col-box">
        <div className="sld-3-cols sld-3-col-1">
          <img src={iconPlate} alt="plate icon" />
          <p>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </p>
        </div>
        <div className="sld-3-cols sld-3-col-2">
          <img src={iconCalendar} alt="calendar icon" />
          <p>
            A arcu
            <br />
            cursus vitae
          </p>
        </div>
      </div>
      <button
        className="btn btn-about"
        onClick={() => setAdditInfoIsOpen(true)}
      >
        <img src={buttonMoreInfo} alt="about" />
      </button>
    </div>
  );
}
export default defTab;
