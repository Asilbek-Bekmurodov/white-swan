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
                    end={50}
                    duration={2}
                    delay={0}
                  />
                )}
                <span> cities</span>
              </div>
              <p className={cls["card-subtitle"]}>Around the world</p>
            </div>
            <div className={cls["statistic-card"]}>
              <div className={cls.number}>
                {count && (
                  <CountUp
                    className={cls.num}
                    start={0}
                    end={2}
                    duration={3}
                    delay={0}
                  />
                )}
                <span> million</span>
              </div>
              <p className={cls["card-subtitle"]}>Happy clients</p>
            </div>
            <div className={cls["statistic-card"]}>
              <div className={cls.number}>
                {count && (
                  <CountUp
                    className={cls.num}
                    start={0}
                    end={4}
                    duration={2}
                    delay={0}
                  />
                )}
                <span> million</span>
              </div>
              <p className={cls["card-subtitle"]}>Deliver goods every week</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
export default Achievement;
