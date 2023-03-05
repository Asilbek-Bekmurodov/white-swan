//assets
import Logo from "../../assets/images/Frame.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

//style-sheet
import cls from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={cls.container}>
      <div className={cls.navbar}>
        <div className={cls.logo}>
          <img src={Logo} alt="" />
        </div>

        <div className={cls.menu}>
          <div className={cls["menu-title"]}>Menu</div>
          <HiOutlineMenuAlt4 size={24} color="white" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
