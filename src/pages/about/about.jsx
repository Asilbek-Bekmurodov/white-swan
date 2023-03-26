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
              <div className={cls.title}>About us</div>
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
                FAST SAFE RELIABLE
              </div>
            </div>
            <div className={cls["right-container"]}>
              <span className={cls["small-title"]}>ABOUT US</span>
              <h3 className={cls.title}>
                <span>White Swan</span>
              </h3>
              <p className={cls["bold-subtitle"]}></p>

              <p className={cls.subtitle}>
                Within the overall supply-chain continuum is the most visible
                and public aspect - the transportation and trucking sector. In
                addition to significant growth, the transportation sector is
                undergoing significant shifts in both how the sector is
                approached from a more responsive perspective and how new
                technology entering the sector, such as electric trucking has
                created opportunities for smaller companies such as White-Swan.
              </p>

              <p className={cls.subtitle}>
                White Swan is a crucial part of the supply chain, providing
                transportation, and logistics solutions. As a privately held,
                trucking and logistics company, with an active fleet of 25
                trucks - White Swan facilitates freight transportation services
                for various businesses, operating throughout all 48 US mainland
                states. With plans to expand rapidly over 5 years, the company
                is projected to employ 387 people in management, transportation,
                logistics, and support by the end of 2026.
              </p>

              <div className={cls["bottom-title_container"]}>
                <div className={cls["bottom-title"]}>
                  <FiCheckCircle size={70} />
                  WhiteSwan has already established a growing business with
                  leading clients, including some of market leaders in
                  transportation and logistics in the US sector, including JB
                  Hunt, TQL, Amazon and SCHNEIDER.
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
