import React, { useState } from "react";
import cls from "./hamburgerMenu.module.scss";
import { motion } from "framer-motion";
import MenuToggle from "./menuToggle";
import NavMenu from "./navMenu";

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.05 };

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={cls.container}>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <motion.div
        className={cls.menu_container}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <div className={cls.content_container}>
          <NavMenu isOpen={isOpen} />
        </div>
      </motion.div>
    </div>
  );
}
export default HamburgerMenu;
