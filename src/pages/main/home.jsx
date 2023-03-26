import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Slider from "react-slick";

// style-sheet
import cls from "./home.module.scss";
import cx from "classnames";
import Leading from "./components/leading/leading";
import Ceo from "./components/ceo/ceo";
import Features from "./components/features/features";
import Footer from "../../components/footer/footer";
import MoreAbout from "./components/moreAbout/moreAbout";
import { Lines } from "react-preloaders";
import PreLoader from "../../components/preLoader/preLoader";
import Partners from "./components/partners/partners";
import Tesla from "./components/tesla/tesla";

const headerData = [
  {
    classname: "first",
    secondClass: "first-info",
    title: "Trucking industry in the United States",
    subtitle:
      "The trucking industry is an important part of The U.S. economy, representing one of the largest sources of income, and moving 11 billion tons of freight -- nearly 70% of all freight -- across the country. In the private sector, trucking companies such as White-Swan collectively employ about 8.9 million people in trucking-related jobs, including almost 3.5 million truck drivers. Overall the industry contributes about 5% of gross domestic product each year. ",
  },
  {
    classname: "second",
    secondClass: "second-info",
    title: "White Swan",
    subtitle:
      "White-Swan is a privately held, trucking and logistics company, with an active fleet 25 trucks. The company facilitates freight transportation services for various businesses, operating throughout all 48 US mainland states.",
  },
  {
    classname: "third",
    title: "A Green Future",
    secondClass: "third-info",
    subtitle:
      "Green Shipping are practices, processes, or technologies that are employed to reduce emissions, consume less energy, and be more efficient. The impetus to move toward a Green Future is not limited to the US. According to OECD's 2021 International Transport Forum, demand for passenger and freight transportation is expected to increase rapidly over the next few decades. Growing economies in Asia, Africa, and Latin America are expected to triple the global demand for freight by 2050, doubling the amount of greenhouse gas emissions from trucking. Transportation accounts for 8% of the global greenhouse gas emissions, or as much as 11% when including storage facilities and ports. Therefore it is incumbent upon all transportation and logistics companies to embrace every aspect of environmental efficiency.",
  },
];

function Home() {
  const sectionRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      const clientHeight = sectionRef.current?.clientHeight;
      setHeight(clientHeight);
    }, 1500);
  });

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar fatherHeight={height} />
          <Slider {...settings}>
            {headerData.map(
              ({ secondClass, classname, title, subtitle }, idx) => (
                <div
                  key={idx}
                  ref={sectionRef}
                  className={cx(cls[classname], cls.item)}
                >
                  <div className={cls.container}>
                    <div className={cls[secondClass]}>
                      <h1 className={cls.title}>{title}</h1>
                      <p className={cls.subtitle}>{subtitle}</p>
                      <div className={cls.more_btn}>Explore more</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
          <Leading />
          <Tesla />
          <Features />
          <Ceo />
          <MoreAbout />
          <Partners />
          <Footer />
        </>
      )}
    </div>
  );
}
export default Home;
