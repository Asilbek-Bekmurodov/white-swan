import React from "react";
import ThirdImg from "../../../assets/images/third.svg";
import cls from "./third.module.scss";

const Third = () => {
  return (
    <div className={cls.third}>
      <h2>WHITE-SWAN OVERVIEW</h2>

      <img className={cls.img} src={ThirdImg} alt="" />
    </div>
  );
};

export default Third;
