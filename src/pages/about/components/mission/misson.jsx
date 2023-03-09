//stylesheet
import cls from "./misson.module.scss";

function Mission() {
  return (
    <div className={cls.bg}>
      <div className={cls["mission-container"]}>
        <div className={cls["left-container"]}>
          <img
            className={cls["left-container_img"]}
            src="https://demo.artureanec.com/themes/transx-new/wp-content/uploads/2021/06/mission.jpg"
            alt=""
          />
        </div>
        <div className={cls["right-container"]}>
          <span className={cls["small-title"]}>MISSION</span>
          <h3 className={cls.title}>
            Our mission is to
            <span> Give you</span> Good Services
          </h3>
          <p className={cls["bold-subtitle"]}>
            Brook trout powen harelip sucker gibberfish beluga sturgeon
            coelacanth tidewater goby elephant fish yellowtail slender snipe eel
            rasbora
          </p>

          <p className={cls.subtitle}>
            Rainbowfish powen paddlefish brotula Arctic char zebra bullhead
            shark. Yellowhead jawfish gianttail temperate ocean-bass Atlantic
            eel river stingray skilfish. Flounder.
          </p>

          <p className={cls.subtitle}>
            Skilfish, halosaur skilfish manefish, bonnetmouth alfonsino
            largenose fish moonfish aruana glowlight danio. Basking shark
            halibut, North Pacific.
          </p>

          <div className={cls["bottom-title_container"]}>
            <div className={cls["bottom-title"]}>
              Red salmon skilfish, threadtail mullet southern flounder,
              orangespine unicorn fish flounder bobtail snipe eel.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mission;
