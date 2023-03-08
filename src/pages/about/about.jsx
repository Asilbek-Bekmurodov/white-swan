import { useEffect, useState } from "react";
import PreLoader from "../../components/preLoader/preLoader";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Partners from "../main/components/partners/partners";

//stylesheet
import cls from "./about.module.scss";

function About() {
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
            <div className={cls.title}> About Us</div>
          </div>
          <Partners />
          <Footer />
        </>
      )}
    </>
  );
}
export default About;
