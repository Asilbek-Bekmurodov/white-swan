import { FiCheckCircle } from "react-icons/fi";
//assets
import SevicePhoto from "../../../../assets/images/female-call-center-agent-posing-with-headphones-with-mic.jpg";
//stylesheet
import cls from "./operators.module.scss";

function Operators() {
  return (
    <div className={cls["about-info"]}>
      <div className={cls["left-container"]}>
        <img className={cls["left-container_img"]} src={SevicePhoto} alt="" />
      </div>
      <div className={cls["right-container"]}>
        <span className={cls["small-title"]}>OUR SERVICE</span>
        <h3 className={cls.title}>
          Owner Operators <span>and</span> Drivers
        </h3>

        <div className={cls["bottom-title_container"]}>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            24/7 Dispatching
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Modern Equipment
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            High per mile pay for both solo and team
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            On time payment
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            High valuable loads
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Significant number of partnership, such as Amazon, Fedex, XPO
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Referral bonuses
          </div>
        </div>
      </div>
    </div>
  );
}
export default Operators;
