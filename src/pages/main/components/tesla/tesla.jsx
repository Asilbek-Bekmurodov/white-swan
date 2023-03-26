import cls from "./tesla.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";

function Tesla() {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <div className={cls["right-section"]}>
          <h3>Electric power</h3>
          <p>
            Replacing gasoline and diesel- powered trucks with those that are
            electric could greatly improve human health and even save tens of
            thousands of lives, according to a recent report by the American
            Lung Association. Combination trucks account for about 18 percent of
            U.S. vehicle emissions-Semi will help change that. With less than 2
            kWh per mile of energy consumption, Semi can travel up to 500 miles
            on a single charge. Recover up to 70 percent of range in 30 minutes
            using Tesla's Semi Chargers.
          </p>
          <button className={cls["more-btn"]}>
            Learn more <BsArrowRightCircle size={28} color="#f9b025" />
          </button>
        </div>
        <div className={cls["left-section"]}>
          <img
            src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/cms/uploads/obuoqyxhxa2amoidt5tz"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Tesla;
