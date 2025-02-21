import sperm1 from "../img/slide2/sperm1.png";
import sperm2 from "../img/slide2/sperm2.png";
import sperm3 from "../img/slide2/sperm3.png";
import sperm4 from "../img/slide2/sperm4.png";

// eslint-disable-next-line react/prop-types
function Second({ ref, isAnimated }) {
  return (
    <div ref={ref} className="slide slide-animated">
      <div className="sld-2-container">
        <h3 className="text-title">
          текст
          <br />
          сообщения
        </h3>
        <div className="sld-2-text-container">
          <p>
            <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing
            elit. Morbi laoreet malesuada orci at commodo. Aenean at dictum
            elit. Aliquam erat volutpat. Phasellus placerat hendrerit ultrices.
            Integer non accumsan erat. Ut sed convallis nunc. Mauris eget nisi
            vehicula, consectetur leo eget, faucibus arcu. Nunc vitae congue
            ligula, vitae scelerisque orci. Vestibulum sit amet vestibulum
            metus, vitae bibendum erat. Curabitur dictum est vel feugiat dictum.
            Vivamus at urna urna. Donec interdum eros eu est placerat, eu
            rhoncus libero mattis. Duis at tellus ante. Aliquam a aliquam metus.
            Nam bibendum, nisi sed malesuada lobortis, sapien ligula posuere
            massa, sed laoreet nibh ex quis lorem. Ut bibendum nibh eget metus
            scelerisque, quis facilisis orci elementum. Aenean eleifend et massa
            ut ullamcorper. Sed vitae gravida nibh. Mauris in massa a lacus
            rhoncus vestibulum eu id leo. Quisque tempus sem massa, nec lobortis
            leo suscipit in. Duis ut dolor eget risus tincidunt facilisis.
            Aenean vitae enim eu lectus accumsan consectetur. Vivamus id augue
            bibendum, dapibus lorem eget, finibus nunc. Pellentesque ut
            scelerisque lectus. Mauris eu risus at orci laoreet ultricies.
            Integer eget lorem at diam tincidunt egestas. Vivamus non elit
            ultrices, elementum nisi dictum, blandit metus. Duis sit amet libero
            nisl. Proin bibendum nisi eu diam tristique gravida. Nam vel odio
            mattis, pulvinar quam quis, tempor diam. Vestibulum imperdiet
            interdum lacus, nec laoreet purus tempus ac. Morbi maximus tincidunt
            tincidunt. Aliquam nulla justo, condimentum maximus est nec,
            suscipit bibendum mi. Donec nunc ligula, congue quis dui ut, posuere
            feugiat dolor. Sed aliquet fringilla felis eu dictum. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Suspendisse potenti. Maecenas dignissim luctus
            interdum. Donec quis libero dolor. Praesent scelerisque ex id ante
            fermentum, non lacinia dui egestas. Nunc ipsum mauris, tempor nec
            scelerisque molestie, finibus ut nisl. Sed gravida elit lorem, et
            malesuada massa tincidunt non. Ut non ipsum a velit luctus finibus.
            Phasellus placerat auctor orci non finibus. Mauris vel ipsum ut mi
            condimentum eleifend nec id tortor. Nam vestibulum interdum
            interdum. Maecenas faucibus arcu ac elit pulvinar iaculis. Ut tempor
            tortor quam, vitae mollis nisl dapibus id. Maecenas accumsan, nisi
            ac placerat dictum, ipsum erat imperdiet leo, ut posuere arcu sapien
            at magna. Donec porttitor lacus sit amet eros aliquam, sed tempor
            est dignissim. Pellentesque luctus nulla elit, vitae cursus enim
            tristique in. Sed fermentum vehicula nibh sed dignissim. Duis at
            orci velit. Vestibulum nisi nisi, tristique a malesuada eget,
            viverra eget libero. Donec convallis enim tellus, in convallis
            tortor scelerisque vel. Cras non placerat lectus. Vestibulum felis
            leo, interdum at justo sed, posuere rhoncus metus. Sed egestas
            rutrum ipsum, maximus interdum elit consequat sit amet.
          </p>
        </div>
        <div className="background-box" />
      </div>
      {isAnimated && (
        <>
          <img
            src={sperm1}
            className={isAnimated ? "sperm-animation sperm-1" : "sperm-1"}
            alt="sperm"
          />
          <img
            src={sperm2}
            className={isAnimated ? "sperm-animation sperm-2" : "sperm-2"}
            alt="sperm"
          />
          <img
            src={sperm3}
            className={isAnimated ? "sperm-animation sperm-3" : "sperm-3"}
            alt="sperm"
          />
          <img
            src={sperm4}
            className={isAnimated ? "sperm-animation sperm-4" : "sperm-4"}
            alt="sperm"
          />
          <img
            src={sperm2}
            className={isAnimated ? "sperm-animation sperm-5" : "sperm-5"}
            alt="sperm"
          />
        </>
      )}
    </div>
  );
}

export default Second;
