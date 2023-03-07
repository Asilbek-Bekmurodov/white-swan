//assets
import Logo from "../../assets/images/Frame.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import cx from "classnames"

//style-sheet
import cls from "./navbar.module.scss";
import HamburgerMenu from "../hamburgerMenu";
import { useEffect, useState } from "react";

function Navbar({ fatherHeight }) {
  const [navbar, setNavbar] = useState(false);

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
    <div className={cx(cls.container, navbar === true && cls.active)}>
      <div className={cls.navbar}>
        <div className={cls.logo}>
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
