import { FiCheckCircle } from "react-icons/fi";
//assets
import SevicePhoto from "../../../../assets/images/female-call-center-agent-posing-with-headphones-with-mic.jpg";
//stylesheet
import cls from "./our-service.module.scss";

function OurService() {
  return (
    <div className={cls["about-info"]}>
      <div className={cls["left-container"]}>
        <img className={cls["left-container_img"]} src={SevicePhoto} alt="" />
      </div>
      <div className={cls["right-container"]}>
        <span className={cls["small-title"]}>OUR SERVICE</span>
        <h3 className={cls.title}>
          Powerful Features of
          <span> 24/7 dispatch service</span> company
        </h3>
        <p className={cls["bold-subtitle"]}>
          Brook trout powen harelip sucker gibberfish beluga sturgeon coelacanth
          tidewater goby elephant fish yellowtail slender snipe eel rasbora
        </p>

        <p className={cls.subtitle}>
          Rainbowfish powen paddlefish brotula Arctic char zebra bullhead shark.
          Yellowhead jawfish gianttail temperate ocean-bass Atlantic eel river
          stingray skilfish. Flounder.
        </p>

        <p className={cls.subtitle}>
          Skilfish, halosaur skilfish manefish, bonnetmouth alfonsino largenose
          fish moonfish aruana glowlight danio. Basking shark halibut, North
          Pacific.
        </p>

        <div className={cls["bottom-title_container"]}>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Red salmon skilfish, threadtail mullet southern flounder,
            orangespine unicorn fish flounder bobtail snipe eel.
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Trumpeter ropefish bonito roughy cobbler dogteeth tetra Russian
            sturgeon pollock sea snail.
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurService;
