import cls from "./ceo.module.scss";
import CEO from "../../../../assets/images/ceo.jpg";
function Ceo() {
  return (
    <div className={cls.ceo}>
      <h3 className={cls.title}>
        Message from our <span>CEO</span>{" "}
      </h3>
      <div className={cls["ceo-container"]}>
        <div className={cls["ceo-photo"]}>
          <img src={CEO} alt="" />
        </div>
        <div className={cls["ceo-info"]}>
          <div className={cls["about-wrapper"]}>
            <h5>Dear partners,</h5>
            <p className={cls.about}>
              I am thrilled to welcome you to our trucking company, where we
              strive to provide the highest level of service to our customers.
              Our team of dedicated professionals is committed to meeting your
              needs and exceeding your expectations.
              <br />
              <br />
              At our company, we are also committed to sustainability and are
              excited to announce our move towards electric trucks. We believe
              that this decision not only benefits the environment but also
              positions us as a leader in the industry.
              <br />
              <br />
              We look forward to working with you and providing you with
              reliable, sustainable, and cost-effective transportation
              solutions. Thank you for choosing us as your transportation
              partner.
              <br />
              <br />
              Best regards,
            </p>
            <h4 className={cls.name}>Saidmurod Ikromov</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ceo;
