import { Fragment } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import First from "./components/first";
import cls from "./info.module.scss";
import { useParams } from "react-router-dom";
import Second from "./components/second";
import Third from "./components/third";

const headerData = [
  {
    classname: "first",
    secondClass: "first-info",
    title: "Trucking industry in the United States",
    subtitle:
      "The trucking industry is an important part of The U.S. economy, representing one of the largest sources of income, and moving 11 billion tons of freight -- nearly 70% of all freight -- across the country. In the private sector, trucking companies such as White-Swan collectively employ about 8.9 million people in trucking-related jobs, including almost 3.5 million truck drivers. Overall the industry contributes about 5% of gross domestic product each year. ",
  },
  {
    classname: "second",
    secondClass: "second-info",
    title: "White Swan",
    subtitle:
      "White-Swan is a privately held, trucking and logistics company, with an active fleet 25 trucks. The company facilitates freight transportation services for various businesses, operating throughout all 48 US mainland states.",
  },
  {
    classname: "third",
    title: "A Green Future",
    secondClass: "third-info",
    subtitle:
      "Green Shipping are practices, processes, or technologies that are employed to reduce emissions, consume less energy, and be more efficient. The impetus to move toward a Green Future is not limited to the US. According to OECD's 2021 International Transport Forum, demand for passenger and freight transportation is expected to increase rapidly over the next few decades. Growing economies in Asia, Africa, and Latin America are expected to triple the global demand for freight by 2050, doubling the amount of greenhouse gas emissions from trucking. Transportation accounts for 8% of the global greenhouse gas emissions, or as much as 11% when including storage facilities and ports. Therefore it is incumbent upon all transportation and logistics companies to embrace every aspect of environmental efficiency.",
  },
];
const header = {
  first: {
    classname: "first",
    secondClass: "first-info",
    title: "Trucking industry in the United States",
    subtitle:
      "The trucking industry is an important part of The U.S. economy, representing one of the largest sources of income, and moving 11 billion tons of freight -- nearly 70% of all freight -- across the country. In the private sector, trucking companies such as White-Swan collectively employ about 8.9 million people in trucking-related jobs, including almost 3.5 million truck drivers. Overall the industry contributes about 5% of gross domestic product each year. ",
    content: <First />,
  },
  second: {
    classname: "second",
    secondClass: "second-info",
    title: "White Swan",
    subtitle:
      "White-Swan is a privately held, trucking and logistics company, with an active fleet 25 trucks. The company facilitates freight transportation services for various businesses, operating throughout all 48 US mainland states.",
    content: <Third />,
  },
  third: {
    classname: "third",
    title: "A Green Future",
    secondClass: "third-info",
    subtitle:
      "Green Shipping are practices, processes, or technologies that are employed to reduce emissions, consume less energy, and be more efficient. The impetus to move toward a Green Future is not limited to the US. According to OECD's 2021 International Transport Forum, demand for passenger and freight transportation is expected to increase rapidly over the next few decades. Growing economies in Asia, Africa, and Latin America are expected to triple the global demand for freight by 2050, doubling the amount of greenhouse gas emissions from trucking. Transportation accounts for 8% of the global greenhouse gas emissions, or as much as 11% when including storage facilities and ports. Therefore it is incumbent upon all transportation and logistics companies to embrace every aspect of environmental efficiency.",
    content: <Second />,
  },
};

const Info = () => {
  const { type } = useParams();

  return (
    <div className={cls.info}>
      <Navbar bgNav={true} />
      <div style={{ marginTop: "150px" }}>
        <Fragment>
          <h1 className={cls.title}>{header[type].title}</h1>
          <p className={cls.subtitle}>{header[type].subtitle}</p>
        </Fragment>
      </div>
      {header[type].content}
      <Footer />
    </div>
  );
};

export default Info;
