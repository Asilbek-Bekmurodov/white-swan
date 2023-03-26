//stylesheet
import cls from "./misson.module.scss";

function Mission() {
  return (
    <div className={cls.bg}>
      <div className={cls["mission-container"]}>
        <div className={cls["left-container"]}>
          <img
            className={cls["left-container_img"]}
            src="https://demo.artureanec.com/themes/transx-new/wp-content/uploads/2021/06/mission.jpg"
            alt=""
          />
        </div>
        <div className={cls["right-container"]}>
          <span className={cls["small-title"]}>MISSION</span>
          <h3 className={cls.title}>
            <span>Company Mission</span>
          </h3>
          <p className={cls["bold-subtitle"]}>
            Understanding the company’s strategic objectives, and underlying
            business philosophy shapes White Swan’s overall mission.
          </p>

          <p className={cls.subtitle}>
            White Swan’s goal as a key logistics and supply chain partner will
            be evident in the form of lower transportation costs, optimized
            deliveries, and better systems for managing services. To fulfill
            this strategic mission, White Swan will embark on a five-point
            roadmap, that not only serves its current customer base but will aid
            the company in achieving its strategic expansion plans over the next
            five years.
          </p>

          <div className={cls["bottom-title_container"]}>
            {/* <div className={cls["bottom-title"]}>
              Red salmon skilfish, threadtail mullet southern flounder,
              orangespine unicorn fish flounder bobtail snipe eel.
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mission;
