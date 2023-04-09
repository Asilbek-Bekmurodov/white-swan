import cls from "./first.module.scss";

const firstData = [
  {
    circleNum: 8.9,
    circleWord: "Million",
    title: "US GDP",
    subtitle:
      "The sector contributes to 5% of the US Gross Domestic Product and employs 8.9 million.",
    color: "#4DADB5",
  },
  {
    circleNum: 11,
    circleWord: "Billion",
    title: "FREIGHT",
    subtitle:
      "11 Billion tons of of freight are moved across the US each year.",
    color: "#3984A3",
  },
  {
    circleNum: 700,
    circleWord: "Billion",
    title: "REVENUES",
    subtitle:
      "Over $700 Billion is generated each year by the trucking sector.",
    color: "#2C526A",
  },
];
const First = () => {
  return (
    <div className={cls.container}>
      <div className={cls["card-container"]}>
        {firstData.map(
          ({ circleNum, circleWord, color, title, subtitle }, idx) => (
            <div key={idx} className={cls.card}>
              <div
                style={{ backgroundColor: `${color}` }}
                className={cls.circle}
              >
                {circleNum} <br /> {circleWord}
              </div>
              <div className={cls.title}>{title}</div>
              <div className={cls.subtitle}>{subtitle}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default First;
