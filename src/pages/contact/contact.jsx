import { useEffect, useState } from "react";
import PreLoader from "../../components/preLoader/preLoader";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { send } from "emailjs-com";

//stylesheet
import cls from "./contact.module.scss";
import { RiPhoneLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { toast } from "react-toastify";

export const contactData = [
  {
    icon: <RiPhoneLine size={18} className={cls.icon} />,
    title: "PHONE",
    subtitle: ["+1 747 290 00 07", "+1 619 787 39 89"],
    href: "tel: +1 747 290 00 07",
  },
  {
    icon: <HiOutlineMail size={18} className={cls.icon} />,
    title: "EMAIL",
    subtitle: ["whiteswancorporation@gmail.com"],
    href: "mailto:whiteswancorporation@gmail.com",
  },
  {
    icon: <GoLocation size={18} className={cls.icon} />,
    title: "LOCATION",
    subtitle: ["100 E Campus View Blvd, Colombus,", "United States"],
    href: "https://www.google.com/maps/place/100+E+Campus+View+Blvd,+Columbus,+OH+43235/@40.1190268,-83.0143925,15z/data=!4m6!3m5!1s0x8838f36aab7e4fa3:0x35086d0ce1a7548c!8m2!3d40.1190268!4d-83.0143925!16s%2Fg%2F11bw3g2h38?hl=en-us",
  },
  {
    icon: <AiOutlineShareAlt size={18} className={cls.icon} />,
    title: "FOLLOW US",
    subtitle: [
      <MdOutlineFacebook />,
      <AiFillTwitterCircle />,
      <GrLinkedinOption />,
    ],
    href: "#1",
  },
];

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_o298zh", "template_2z2y6lr", toSend, "k20fje8oqZCoTykf3")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Thank you for applying !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#f9b025" },
          className: "toast",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Something is wrong !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "toast",
        });
      });
    console.log(toSend);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar bgNav={true} />
          <div className={cls.header}>
            <div className={cls.container}>
              <div className={cls.title}> Contact us</div>
            </div>
          </div>

          <div className={cls["contact--us__section"]}>
            <div className={cls["contact--us__container"]}>
              <div className={cls["info-container"]}>
                <span className={cls["small-title"]}>CONTACT US</span>
                <h3 className={cls.title}>Contact Info</h3>
                <div className={cls["other-infos"]}>
                  {contactData?.map(({ title, icon, subtitle, href }, idx) => (
                    <div key={idx} className={cls["other-container"]}>
                      <div className={cls["info-icon"]}>{icon}</div>
                      <div className={cls["info-box"]}>
                        <h4 className={cls["info-title"]}>{title}</h4>
                        <div
                          style={
                            title === "FOLLOW US"
                              ? { flexDirection: "row" }
                              : null
                          }
                          className={cls["subtitle-wrapper"]}
                        >
                          {subtitle?.map((item, idx) => (
                            <a
                              key={idx}
                              href={href}
                              className={cls["info-subtitle"]}
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cls["form-container"]}>
                <h4>Send a Message</h4>
                <form className={cls.form} onSubmit={onSubmit}>
                  <div className={cls["form-top"]}>
                    <input
                      className={cls.input}
                      type="text"
                      name="from_name"
                      placeholder=" Your name"
                      value={toSend.to_name}
                      onChange={handleChange}
                    />
                    <input
                      className={cls.input}
                      type="text"
                      name="reply_to"
                      placeholder="Your email"
                      value={toSend.reply_to}
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    style={{ height: "188px" }}
                    className={cls.input}
                    type="text"
                    name="message"
                    placeholder="Your message"
                    value={toSend.message}
                    onChange={handleChange}
                  />
                  <button className={cls.btn} type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={cls["map-container"]}>
            <iframe
              className={cls.map}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14466.685348341442!2d-83.01511374829563!3d40.12091886711596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f36aab7e4fa3%3A0x35086d0ce1a7548c!2s100%20E%20Campus%20View%20Blvd%2C%20Columbus%2C%20OH%2043235%2C%20USA!5e0!3m2!1sen!2s!4v1679862061594!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
export default Contact;
