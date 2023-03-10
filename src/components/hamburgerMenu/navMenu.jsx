import React from "react";
import cls from "./navMenu.module.scss";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};
function NavMenu({ isOpen }) {
  const navigate = useNavigate();
  return (
    <div className={cls.nav_menu_container}>
      <ul className={cls.nav_list}>
        <motion.li
          className={cls.nav_ink}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <NavLink to={"/"}>Home</NavLink>
        </motion.li>

        <motion.li
          className={cls.nav_ink}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <NavLink to={"/about"}>About us</NavLink>
        </motion.li>

        <motion.li
          className={cls.nav_ink}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <NavLink to={"/services"}>Services</NavLink>
        </motion.li>
        <motion.li
          className={cls.nav_ink}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <NavLink to={"/contact"}>Contact</NavLink>
        </motion.li>
      </ul>
    </div>
  );
}
export default NavMenu;
