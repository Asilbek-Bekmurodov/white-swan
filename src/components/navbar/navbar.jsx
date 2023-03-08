//assets
import Logo from "../../assets/images/Frame.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import cx from "classnames";

//style-sheet
import cls from "./navbar.module.scss";
import HamburgerMenu from "../hamburgerMenu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ fatherHeight, bgNav }) {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(fatherHeight);
    const changeBackground = () => {
      if (window.scrollY >= fatherHeight - 160) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, [fatherHeight]);
  return (
    <div
      style={bgNav && { background: "black" }}
      className={cx(cls.container, navbar === true && cls.active)}
    >
      <div className={cls.navbar}>
        <div onClick={() => navigate("/")} className={cls.logo}>
          <img src={Logo} alt="" />
        </div>

        <div className={cls.menu}>
          {/* <div className={cls["menu-title"]}>Menu</div>
          <HiOutlineMenuAlt4 size={24} color="white" /> */}
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
