import { useEffect, useState } from "react";
import PreLoader from "../../components/preLoader/preLoader";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

//stylesheet
import cls from "./services.module.scss";
import OurService from "./components/out-service/our-service";

function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar bgNav={true} />
          <div className={cls.header}>
            <div className={cls.container}>
              <div className={cls.title}>Our services</div>
            </div>
          </div>
          <OurService />
          <Footer />
        </>
      )}
    </>
  );
}
export default Services;
