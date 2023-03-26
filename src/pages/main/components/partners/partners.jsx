//package
import Slider from "react-slick";

//stylesheet
import cls from "./partners.module.scss";

const partnersData = [
  {
    img: "https://d3iqwsql9z4qvn.cloudfront.net/wp-content/uploads/2018/06/28124148/Amazon-Logo-PNG.png",
  },
  { img: "https://companieslogo.com/img/orig/XPO-480a3481.png?t=1649296127" },
  {
    img: "https://www.ti-insight.com/wp-content/uploads/2017/01/jb-hunt-transport-logo.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FedEx_Ground.svg/2560px-FedEx_Ground.svg.png",
  },
];

function Partners() {
  return (
    <div className={cls["bg-color"]}>
      <div className={cls.partners}>
        <div className={cls["title-container"]}>
          <div className={cls["outline-title"]}>Partners</div>
          <span className={cls["small-title"]}>Partners</span>
          <h3 className={cls.title}>
            Companies Who <span>Trust</span> Us
          </h3>
        </div>

        <div className={cls["parners-container"]}>
          {partnersData.map(({ img }, idx) => (
            <div key={idx} className={cls.partner}>
              <img src={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Partners;
