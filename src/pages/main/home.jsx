import React from "react";
import Navbar from "../../components/navbar/navbar";
import Slider from "react-slick";

// style-sheet
import cls from "./home.module.scss";
import cx from "classnames";

const headerData = [
  {
    classname: "first",
    secondClass: "first-info",
    title: " Transportation Services around the Worlds",
    subtitle:
      "Rockling Devario deep sea bonefish cutthroat trout streamer fishkaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting,suckermouth armored catfish luderick blackchin kingfish",
  },
  {
    classname: "second",
    secondClass: "second-info",
    title: " Transportation Services around the Worlds",
    subtitle:
      "Rockling Devario deep sea bonefish cutthroat trout streamer fishkaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting,suckermouth armored catfish luderick blackchin kingfish",
  },
  {
    classname: "third",
    title: " Transportation Services around the Worlds",
    secondClass: "third-info",
    subtitle:
      "Rockling Devario deep sea bonefish cutthroat trout streamer fishkaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting,suckermouth armored catfish luderick blackchin kingfish",
  },
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    // autoplaySpeed: 4000,
    // cssEase: "linear",
    // pauseOnHover: false,
  };
  return (
    <div>
      <Navbar />
      <Slider {...settings}>
        {headerData.map(({ secondClass, classname, title, subtitle }) => (
          <div className={cx(cls[classname], cls.item)}>
            <div className={cls.container}>
              <div className={cls[secondClass]}>
                <h1 className={cls.title}>{title}</h1>
                <p className={cls.subtitle}>{subtitle}</p>
                <div className={cls.more_btn}>Explore more</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Home;
