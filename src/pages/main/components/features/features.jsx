// stylesheet
import cls from "./features.module.scss";

//icons
import Icon1 from "../../../../assets/images/warehouse.svg";
import Icon2 from "../../../../assets/images/support.svg";
import Icon3 from "../../../../assets/images/online-trucing.svg";
import Icon4 from "../../../../assets/images/cargo.svg";
const cardData = [
  {
    title: "Warehouse",
    subtitle:
      "Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish.",
    icon: Icon1,
  },
  {
    title: "Support 24/7",
    subtitle:
      "Greenling sleeper; Owens pupfish large-eye bream kokanee sprat shrimpfish.",
    icon: Icon2,
  },
  {
    title: "Online Tracking",
    subtitle: "Mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish.",
    icon: Icon3,
  },
  {
    title: "Cargo Insurance",
    subtitle: "Pacific hake false trevally queen parrotfish Black prickleback.",
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
              Powerful Features of <span>WhiteSwan</span> Warehouse
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
