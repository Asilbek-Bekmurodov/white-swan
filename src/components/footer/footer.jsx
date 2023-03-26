import cls from "./footer.module.scss";
import Logo from "../../assets/images/Frame.svg";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.left}>
          <img
            onClick={() => navigate("/")}
            className={cls.logo}
            src={Logo}
            alt=""
          />
          <div className={cls.links}>
            <BsYoutube size={25} />
            <BsTwitter size={25} />
            <BsLinkedin size={25} />
            <BsInstagram size={25} />
          </div>
        </div>
        <div className={cls.right}>
          <div className={cls.box}>
            <h3>Our Office</h3>
            <p>100 E CAMPUS VIEW BLVD SUITE 250 </p>
            <p>COLUMBUS, OH 43235</p>
          </div>
          <div className={cls.box}>
            <h3>Work Inquiries</h3>
            <p>Interested in working with us?</p>
            <p>whiteswansafety@gmail.com</p>
          </div>
          <div className={cls.box}>
            <h3>Phone</h3>
            <p>+1 747 290 00 07</p>
            <p>+1 619 787 39 89</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
