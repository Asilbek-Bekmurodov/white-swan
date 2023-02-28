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
            <h3>Columbia Office</h3>
            <p>Washington 165,</p>
            <p>NY CA 54003</p>
          </div>
          <div className={cls.box}>
            <h3>New Mexico Office</h3>
            <p>10 Maggie Valleys,</p>
            <p>United States</p>
          </div>
          <div className={cls.box}>
            <h3>Work Inquiries</h3>
            <p>Interested in working with us?</p>
            <p>transx@mail.com</p>
          </div>
          <div className={cls.box}>
            <h3>Phone</h3>
            <p>+1 800 674 78 91</p>
            <p>+1 800 257 31 93</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
