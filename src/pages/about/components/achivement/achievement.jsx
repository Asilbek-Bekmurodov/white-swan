import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import cls from "./achievement.module.scss";

function Achievement() {
  const [count, setCount] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div className={cls.bg}>
        <div className={cls.achievement}>
          <span className={cls["small-title"]}>ACHIEVEMENT</span>
          <div className={cls.title}>High work achievements</div>
          <div className={cls["statistic-container"]}>
            <div className={cls["statistic-card"]}>
              <div className={cls.number}>
                {count && (
                  <CountUp
                    className={cls.num}
                    start={0}
                    end={48}
                    duration={2}
                    delay={0}
                  />
                )}
                <span> states</span>
              </div>
              <p className={cls["card-subtitle"]}>Of the USA</p>
            </div>
            <div className={cls["statistic-card"]}>
              <div className={cls.number}>
                {count && (
                  <CountUp
                    className={cls.num}
                    start={0}
                    end={5}
                    duration={3}
                    delay={0}
                  />
                )}
                <span> million</span>
              </div>
              <p className={cls["card-subtitle"]}>Annual Revenue in USD</p>
            </div>
            <div className={cls["statistic-card"]}>
              <div className={cls.number}>
                {count && (
                  <CountUp
                    className={cls.num}
                    start={0}
                    end={3}
                    duration={2}
                    delay={0}
                  />
                )}
                <span> years</span>
              </div>
              <p className={cls["card-subtitle"]}> in Business</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
export default Achievement;
