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

const headerData = [
  {
    classname: "first",
    secondClass: "first-info",
    title: " Transportation Services around the World",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, vero perferendis. Atque voluptates nobis, beatae minus ea illo iusto doloremque, magnam ipsa eum laudantium eius vel ex tenetur ad id? Impedit animi laborum tenetur sint. Aliquid autem illo provident nisi.",
  },
  {
    classname: "second",
    secondClass: "second-info",
    title: " Transportation Services around the World",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, vero perferendis. Atque voluptates nobis, beatae minus ea illo iusto doloremque, magnam ipsa eum laudantium eius vel ex tenetur ad id? Impedit animi laborum tenetur sint. Aliquid autem illo provident nisi.",
  },
  {
    classname: "third",
    title: " Transportation Services around the World",
    secondClass: "third-info",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, vero perferendis. Atque voluptates nobis, beatae minus ea illo iusto doloremque, magnam ipsa eum laudantium eius vel ex tenetur ad id? Impedit animi laborum tenetur sint. Aliquid autem illo provident nisi.",
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
          <Features />
          <Ceo />
          <MoreAbout />
          <Footer />
        </>
      )}
    </div>
  );
}
export default Home;
