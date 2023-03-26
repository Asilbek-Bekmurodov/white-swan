// stylesheet
import cls from "./works.module.scss";

//steps data
const stepsData = [
  {
    stepNum: "01",
    stepTitle: "Listening you",
    stepSubtitle:
      "Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish Black prickleback",
  },
  {
    stepNum: "02",
    stepTitle: "Check all details",
    stepSubtitle:
      "Greenling sleeper; Owens pupfish large-eye bream kokanee sprat shrimpfish. Pacific hake false",
  },
  {
    stepNum: "03",
    stepTitle: "Processing",
    stepSubtitle:
      "Mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish large-eye bream kokanee sprat",
  },
  {
    stepNum: "04",
    stepTitle: "Fast & efficient delivery",
    stepSubtitle:
      "Pacific hake false trevally queen parrotfish Black prickleback humuhumunukunukuapua'a",
  },
];

function Works() {
  return (
    <div className={cls.bg}>
      <div className={cls["how-we_works"]}>
        <div className={cls.subtitle}>STEPS FOR WORK</div>
        <h2 className={cls.title}>How We Works</h2>
        <div className={cls["steps-container"]}>
          {stepsData.map(({ stepNum, stepTitle, stepSubtitle }, idx) => (
            <div key={idx} className={cls.steps}>
              <div className={cls["step-number"]}>{stepNum}</div>
              <h4 className={cls["step-title"]}>{stepTitle}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Works;
