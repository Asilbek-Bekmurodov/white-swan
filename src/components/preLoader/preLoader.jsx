//stylesheet
import cls from "./preLoader.module.scss";

//package
import { InfinitySpin } from "react-loader-spinner";

function PreLoader() {
  return (
    <div className={cls.preloader}>
      <InfinitySpin
        radius="9"
        color="#f9b025"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
export default PreLoader;
