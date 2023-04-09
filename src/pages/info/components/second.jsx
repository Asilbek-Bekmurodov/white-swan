import React from "react";
import SecondImg from "../../../assets/images/second.svg";
import cls from "./second.module.scss";

const Second = () => {
  return (
    <div className={cls.second}>
      <h2>A GREEN FUTURE</h2>
      <p>
        Green Shipping are practices, processes, or technologies that are
        employed to reduce emissions, consume less energy, and be more
        efficient.
      </p>
      <img className={cls.img} src={SecondImg} alt="" />
    </div>
  );
};

export default Second;
