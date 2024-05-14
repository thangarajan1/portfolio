import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTypewriter } from "react-simple-typewriter";

export default function Contact() {

const [nameEffect] = useTypewriter({
  words: ["K.Thanga Rajan"],
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 40,
});
const [emailEffect] = useTypewriter({
  words: ["saaralk.t.rajan2@gmail.com"],
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 40,
});
const [addressEffect] = useTypewriter({
  words: ["Pathiralaliyamman Kovil Street ,Thippanam patty, Tenkasi - 627 808"],
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 40,
});

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qed6bty", "template_8p2x6js", form.current, {
        publicKey: "rXN1LspRwWgESTTs6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    alert("Success Full Send Message");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const msg = document.querySelector("#msg");
    name.value = "";
    email.value = "";
    msg.value = "";
  };
  function clearData() {}
  return (
    <>
      <h1 className="text-center con text-white my-5">Contact Us</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 contact px-5">
            <h4>Name : {nameEffect}</h4>

            <p>
              Email :
              <a href="mailto:saaralk.t.rajan2@gmail.com">
                {emailEffect}
              </a>
            </p>
            <p>
              Phone : <a href="tel:+91 7708396866">7708396866</a>
            </p>
            <address>
              <p>Address :</p>
              <p>
                2/95,
                <br />
               {addressEffect}
              </p>
            </address>
          </div>
          <div className="col-md-6 px-5">
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                />
                <label htmlFor="email" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
                <label htmlFor="msg" className="form-label">
                  Message :
                </label>
                <textarea
                  name="msg"
                  placeholder="Enter Your Message"
                  rows={5}
                  id="msg"
                  required
                  className="form-control"
                ></textarea>
                <input
                  type="submit"
                  onClick={clearData}
                  value="Send"
                  className="btn btn1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
