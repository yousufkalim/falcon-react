import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SectionHeader from "./SectionHeader";
import EmailIcon from "../../assets/images/emailIcon.svg";
import Robot from "../../assets/images/notRobort.svg";
import CalendlyIcon from "../../assets/images/calendlyIcon.svg";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import api from "../../api/index";
export default function ContactUsSection(props) {
  const [aboutData, setAboutData] = useState({});

  const [mailContent, SetMailContent] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    contact_email: "",
  });
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_p9t3cg6",
  //       "template_imi9dne",
  //       e.target,
  //       "user_Dh0YsMnLOPp5ckc48VOcP"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  useEffect(() => {
    getHome();
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const handleInput = (e) => {
    SetMailContent({ ...mailContent, [e.target.name]: e.target.value });
  };
  const getHome = async () => {
    await api("get", "/homes").then((res) => {
      setAboutData(res?.data?.home);
    });
  };
  const handleEmail = () => {
    mailContent.contact_email = aboutData.contact_email;
    if (mailContent.email == "") {
      return toast.error("Email is required");
    }
    if (mailContent.name == "") {
      return toast.error("name is required");
    }
    if (mailContent.budget == "") {
      return toast.error("Budget is required");
    }
    if (mailContent.phone == "") {
      return toast.error("Phone Number is required");
    }
    if (mailContent.message == "") {
      return toast.error("Enter  Mesaage");
    }
    if (mailContent.contact_email == "") {
      return toast.error("contact_email");
    }
    api("post", "/contactus/", mailContent).then((data) => {
      toast.success("Message sent to Managment");
      SetMailContent("");
    });
  };
  return (
    <>
      {props.ContactUs ? (
        <div className="ContactUsDiv">
          <div>
            <SectionHeader
              width="5%"
              h1={aboutData.contact_heading}
              h2={aboutData.contact_subheading}
              colorH2="#fff"
              colorDesp="#F8F8F8"
            />
          </div>
          <div className="ContactUsGrid">
            <Grid container spacing={1} className="ContactContainerGrid">
              <Grid container sm={8} md={6} className="ContactFormGrid">
                <form className="ContactForm">
                  <div style={{ display: "flex", width: "100%" }}>
                    <Grid className="InputGrid" xs={12} sm={6}>
                      <input
                        required
                        type="text"
                        name="name"
                        onChange={handleInput}
                        value={mailContent.name}
                        placeholder="Your Name"
                        className="InputField"
                      />
                    </Grid>
                    <Grid className="InputGrid" xs={12} sm={6}>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInput}
                        value={mailContent.email}
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Grid className="InputGrid" xs={12} sm={6}>
                      <input
                        required
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleInput}
                        value={mailContent.phone}
                        className="InputField"
                      />
                    </Grid>
                    <Grid className="InputGrid" xs={12} sm={6}>
                      <input
                        required
                        type="text"
                        name="budget"
                        onChange={handleInput}
                        value={mailContent.budget}
                        placeholder="Budget"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div>
                    <Grid className="InputGrid" xs={12}>
                      <textarea
                        required
                        type="text"
                        name="message"
                        onChange={handleInput}
                        value={mailContent.message}
                        placeholder="Type Your Message"
                        className="textField"
                      />
                    </Grid>
                  </div>
                  <Grid xs={12} className="ReCAPTCHA_DIV">
                    <ReCAPTCHA
                      sitekey="6Ldx_T0gAAAAAEUJmHBAIEaOLc2sTPgb00PcbhnA"
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid className="Contact_Send_Grid" xs={3}>
                    <button
                      type="submit"
                      onClick={handleEmail}
                      className="ContactUsBtn"
                    >
                      Send
                    </button>
                  </Grid>
                </form>
              </Grid>
              <Grid xs={12} sm={10} md={10} className="ContactMedia">
                <div className="ContactMediaDiv">
                  <img className="ContactMediaIcons" src={EmailIcon} />
                  <div className="SocialMediaText">
                    <Typography sx={{ fontSize: "1rem" }}>Email</Typography>
                    <Typography sx={{ fontSize: ".7rem" }}>
                      {aboutData.contact_email}
                    </Typography>
                  </div>
                </div>

                <a href={props.meeting_link}>
                  <div className="ContactMediaDiv">
                    <img className="ContactMediaIcons" src={CalendlyIcon} />
                    <div className="SocialMediaText">
                      <Typography sx={{ fontSize: "1rem" }}>
                        Calendly
                      </Typography>
                      <Typography sx={{ fontSize: ".7rem" }}>
                        {aboutData.meeting_link}
                      </Typography>
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div className="ContactsectionDiv">
          <div className="ContactSection_Mob_Header">
            <SectionHeader
              LeftSectionHeader
              width="10%"
              h1={aboutData.contact_heading}
              h2={aboutData.contact_subheading}
              colorH2="#fff"
              colorDesp="#F8F8F8"
              decription={aboutData.description}
            />
          </div>
          <div className="ContactSectionGrid">
            <Grid container spacing={1} className="ContainerGrid">
              <Grid sm={8} md={6} className="SocialMediaMain">
                <div className="ContactSection_Web_Header">
                  <SectionHeader
                    LeftSectionHeader
                    width="10%"
                    h1={props.heading}
                    h2={props.sub_heading}
                    colorH2="#fff"
                    colorDesp="#F8F8F8"
                    decription={props.description}
                  />
                </div>
                <div>
                  <a href={props.meeting_link}>
                    <div className="SocialMediaDiv">
                      <img className="SocialMediaIcons" src={CalendlyIcon} />
                      <div className="SocialMediaText">
                        <Typography>Schedule Meeting</Typography>
                        <Typography>{props.meeting_link}</Typography>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:contact@falconconsulting.fr">
                    <div className="SocialMediaDiv">
                      <img className="SocialMediaIcons" src={EmailIcon} />
                      <div className="SocialMediaText">
                        <Typography>Email</Typography>
                        <Typography>{props.contact_email}</Typography>
                      </div>
                    </div>
                  </a>
                </div>
              </Grid>
              <Grid container xs={12} sm={8} md={6} className="FormGrid">
                <form className="ContactForm">
                  <div style={{ display: "flex", width: "100%" }}>
                    <Grid xs={12} sm={6}>
                      <input
                        required
                        type="text"
                        name="name"
                        value={mailContent.name}
                        onChange={handleInput}
                        placeholder="Your Name"
                        className="InputField"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        required
                        type="email"
                        name="email"
                        value={mailContent.email}
                        onChange={handleInput}
                        placeholder="Email"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Grid xs={12} sm={6}>
                      <input
                        required
                        type="text"
                        name="phone"
                        value={mailContent.phone}
                        onChange={handleInput}
                        placeholder="Phone"
                        className="InputField"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        required
                        type="text"
                        name="budget"
                        value={mailContent.budget}
                        onChange={handleInput}
                        placeholder="Budget"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div>
                    <Grid xs={12}>
                      <textarea
                        required
                        type="text"
                        name="message"
                        value={mailContent.message}
                        onChange={handleInput}
                        placeholder="Type Your Message"
                        className="textField"
                      />
                    </Grid>
                  </div>
                  <Grid xs={12} className="ReCAPTCHA_DIV">
                    <ReCAPTCHA
                      sitekey="6Ldx_T0gAAAAAEUJmHBAIEaOLc2sTPgb00PcbhnA"
                      onChange={onChange}
                    />
                  </Grid>
                  {/* <Grid xs={12}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "45%",
                        backgroundColor: "rgba(255, 255, 255, 0.912)",
                        padding: "0.5% 2%",
                        margin: "3% 2.5%",
                        opacity: ".9",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <input type="checkbox" />
                        <Typography
                          sx={{
                            marginLeft: "5%",
                            fontSize: "80%",
                            fontWeight: "600",
                          }}
                        >
                          I'm not a robot
                        </Typography>
                      </div>
                      <img src={Robot} />
                    </div>
                  </Grid> */}
                  <Grid xs={3}>
                    <button
                      type="submit"
                      onClick={handleEmail}
                      className="ContactUsBtn"
                    >
                      Send
                    </button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
}
