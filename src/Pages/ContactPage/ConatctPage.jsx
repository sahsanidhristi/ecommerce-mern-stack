import React from "react";
import "./ContactPage.css";
import mail_icon from "../../images/mail-icon.png";
import phone_icon from "../../images/phone-icon.png";
import location_icon from "../../images/location-icon.png";
import msg_icon from "../../images/msg-icon.png";
export default function ConatctPage() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "223156df-8a18-4189-ad53-8a9a84036628");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      {/* <div className="title-section"> 
    <p>contact us</p>
    <h2>get in touch</h2>
     </div> */}
      <div className="contact">
        <div className="contact-col">
          <h3>
            send us message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Welcome to the contact hub of Shop_x ! We
            believe in providing exceptional service and building strong
            relationships with our valued customers. Your satisfaction is our
            top priority, and we're here to ensure that your experience with us
            is nothing short of excellent.We greatly appreciate your feedback as
            it helps us improve and tailor our services to better meet your
            needs. Whether you have a suggestion, a question, or simply want to
            share your experience with us, we encourage you to get in touch.
          </p>
          <ul>
            <li>
              {" "}
              <img src={mail_icon} alt="" />
              contact@shopX.com
            </li>
            <li>
              {" "}
              <img src={phone_icon} alt="" />
              +1234569870
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" />
              Learniphi Technology,Pvt.Ltd<br/>
              1206, Bridge, Satyamev Elite, Sardar Patel Ring Rd, South Bopal, Bopal, Ahmedabad, Gujarat 380058
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Mobile Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label>Send your message </label>
            <textarea
              name="message"
              id=""
              rows="6"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}
