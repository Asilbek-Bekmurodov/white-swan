//stylesheet
import cls from "./preLoader.module.scss";
//package
import { InfinitySpin } from "react-loader-spinner";

function PreLoader() {
  return (
    <div className={cls.preloader}>
      <InfinitySpin
        height="200"
        width="200"
        radius="9"
        color="#f9b025"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
export default PreLoader;
