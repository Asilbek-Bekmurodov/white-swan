// stylesheet
import cls from "./features.module.scss";

//icons
import Icon2 from "../../../../assets/images/support.svg";
import Icon3 from "../../../../assets/images/online-trucing.svg";
import Icon4 from "../../../../assets/images/cargo.svg";
const cardData = [
  {
    title: "Support 24/7",
    subtitle: "Dispatch and update team ready to serve you instantly",
    icon: Icon2,
  },
  {
    title: "Online Tracking",
    subtitle: "GPS navigation and satellite view of all equipments",
    icon: Icon3,
  },
  {
    title: "Hire and Train",
    subtitle:
      "We hire well experienced professionals and train younger generation",
    icon: Icon4,
  },
];

function Features() {
  return (
    <div className={cls["bg-color"]}>
      <div className={cls.features}>
        <div className={cls["fetures-container"]}>
          <div className={cls["big-title"]}>FEATURES</div>
          <span className={cls["small-title"]}>FEATURES</span>
          <h3 className={cls.title}>
            Powerful Features of <span>WhiteSwan</span>
          </h3>
        </div>
        <div className={cls["cards-container"]}>
          {cardData.map(({ title, subtitle, icon }, idx) => (
            <div key={idx} className={cls.card}>
              <h4 className={cls["card-title"]}>{title}</h4>
              <p className={cls["card-subtitle"]}>{subtitle}</p>
              <img className={cls.icon} src={icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Features;
