import cls from "./ceo.module.scss";
import CEO from "../../../../assets/images/ceo.jpg";
function Ceo() {
  return (
    <div className={cls.ceo}>
      <h3 className={cls.title}>About Our CEO</h3>
      <div className={cls["ceo-container"]}>
        <div className={cls["ceo-photo"]}>
          <img src={CEO} alt="" />
        </div>
        <div className={cls["ceo-info"]}>
          <h4 className={cls.name}>Tony West</h4>
          <div className={cls["about-wrapper"]}>
            <p className={cls.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ceo;
