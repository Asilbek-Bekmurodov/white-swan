import cls from "./leading.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";

function Leading() {
  return (
    <div className={cls.container}>
      <h1 className={cls.title}>Leading the charge</h1>
      <div className={cls.wrapper}>
        <div className={cls["right-section"]}>
          <h3>Versatility</h3>
          <p>
            Peterbilt’s versatile lineup of electric trucks provide customers
            zero emissions, high-performance vehicles for clean, efficient
            operation and lower overall maintenance. Peterbilt offers three EV
            configurations – the Models 579EV, 520EV and 220EV – to satisfy
            diverse customer needs.
          </p>
          <button className={cls["more-btn"]}>
            Learn more <BsArrowRightCircle size={28} color="#f9b025" />
          </button>
        </div>
        <div className={cls["left-section"]}>
          <img
            src="https://www.peterbilt.com/sites/default/files/2022-05/homepage_ev.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Leading;
