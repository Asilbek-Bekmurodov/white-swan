import { Lines } from "react-preloaders";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function About() {
  return (
    <>
      <Navbar bgNav={true} />
      <div className="div" style={{ margin: "200px", fontSize: "60px" }}>
        About Page
      </div>
      <Footer />
    </>
  );
}
export default About;
