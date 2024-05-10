import React from "react";
import Contact from "./Contact";
import About from "./About";
import img from './Image/kt.png'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 ">
            <img src={img} width={"80%"} alt="" className="" />
          </div>
          <div className="col-md-8 text-white d-flex flex-column p-5">
            <h4>I'm a K.Thanga Rajan</h4>
            <h2>Front end Developer</h2>
            <p>
              As a front-end developer fresher, i am craft the visual and
              interactive aspects of websites and web applications using HTML,
              CSS, and JavaScript. i am collaborate with designers to bring
              their concepts to life and ensure a seamless user experience.
              Building a diverse portfolio of projects will showcase your skills
              and creativity to potential employers. Stay curious, proactive,
              and adaptable in this dynamic field. With dedication and
              perseverance, i am carve out a rewarding career in front-end
              development.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-3 ">
        <div className="row skill">
          <h1 className="text-center text-white">My Skills</h1>
          <div className="col-md-3  mt-5">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg"
                alt=""
                className="card-img"
              />
              {/* <p>
                HTML stands for HyperText Markup Language and it is used to
                create webpages. It uses HTML tags and attributes to describe
                the structure and formatting of a web page. HTML consists of
                various elements, that are responsible for telling search
                engines how to display page content. For example, headings,
                lists, images, links, and more.
              </p> */}
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/5d/1c/c8/5d1cc864ae7eebae63a1c5738b446e3d.jpg"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/7b/de/0c/7bde0c7f1cc28045b5d0adea41de18d6.jpg"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                src="https://i.pinimg.com/564x/4c/1b/84/4c1b846a1e51d74c4d23cbc3e4b3775d.jpg"
                alt=""
                className="card-img"
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
}
