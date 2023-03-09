import { useEffect, useState } from "react";
import PreLoader from "../../components/preLoader/preLoader";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Partners from "../main/components/partners/partners";
import { FiCheckCircle } from "react-icons/fi";

//stylesheet
import cls from "./about.module.scss";
import Mission from "./components/mission/misson";
import Achievement from "./components/achivement/achievement";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar bgNav={true} />
          <div className={cls.header}>
            <div className={cls.container}>
              <div className={cls.title}> About us</div>
            </div>
          </div>

          {/* about-info-section */}

          <div className={cls["about-info"]}>
            <div className={cls["left-container"]}>
              <img
                className={cls["left-container_img"]}
                src="https://demo.artureanec.com/themes/transx-new/wp-content/uploads/2021/06/section_2.jpg"
                alt=""
              />
              <div className={cls["img-bottom"]}>
                Faster than you can imagine
              </div>
            </div>
            <div className={cls["right-container"]}>
              <span className={cls["small-title"]}>ABOUT US</span>
              <h3 className={cls.title}>
                Powerful Features of
                <span> Transporterium</span> company
              </h3>
              <p className={cls["bold-subtitle"]}>
                Brook trout powen harelip sucker gibberfish beluga sturgeon
                coelacanth tidewater goby elephant fish yellowtail slender snipe
                eel rasbora
              </p>

              <p className={cls.subtitle}>
                Rainbowfish powen paddlefish brotula Arctic char zebra bullhead
                shark. Yellowhead jawfish gianttail temperate ocean-bass
                Atlantic eel river stingray skilfish. Flounder.
              </p>

              <p className={cls.subtitle}>
                Skilfish, halosaur skilfish manefish, bonnetmouth alfonsino
                largenose fish moonfish aruana glowlight danio. Basking shark
                halibut, North Pacific.
              </p>

              <div className={cls["bottom-title_container"]}>
                <div className={cls["bottom-title"]}>
                  <FiCheckCircle size={30} />
                  Red salmon skilfish, threadtail mullet southern flounder,
                  orangespine unicorn fish flounder bobtail snipe eel.
                </div>
                <div className={cls["bottom-title"]}>
                  <FiCheckCircle size={30} />
                  Trumpeter ropefish bonito roughy cobbler dogteeth tetra
                  Russian sturgeon pollock sea snail.
                </div>
              </div>
            </div>
          </div>
          {/* about-info-section */}

          <Mission />
          <Achievement />
          <Partners />
          <Footer />
        </>
      )}
    </>
  );
}
export default About;
