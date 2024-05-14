import React from "react";
import img from "./Image/Certificate/1.jpeg";
import img1 from "./Image/Certificate/2.jpeg";
import img2 from "./Image/Certificate/resume.jpeg";


export default function About() {
  function handleDownload() {
const imgCadd = document.querySelector(".cadd")
const imgCadd1 = document.querySelector(".cadd1");
const imgLink = document.createElement("a");
imgLink.href = imgCadd.src;
imgLink.download = "Certificate.png";
imgLink.style.display="none"
document.body.appendChild(imgLink)
imgLink.click();
document.body.removeChild(imgLink)

const imgLink1 = document.createElement("a");
imgLink1.href = imgCadd1.src;
imgLink1.download = "Certificate1.png";
imgLink1.style.display = "none";
document.body.appendChild(imgLink1);
imgLink1.click();
document.body.removeChild(imgLink1);
  }

   function handleDownload1() {
     const imgCadd = document.querySelector(".resume1");
     const imgLink = document.createElement("a");
     imgLink.href = imgCadd.src;
     imgLink.download = "Resume.png";
     imgLink.style.display = "none";
     document.body.appendChild(imgLink);
     imgLink.click();
     document.body.removeChild(imgLink);
   }

  return (
    <>
      <div className="container about px-5">
        <h1 className="text-center text-white mt-5">About Us</h1>
        <div data-aos="zoom-in">
          <p>
            My name is K.Thanga Rajan and I come from Tenkasi. I have completed
            school in Punitha Arulappar High Secondary school ,Avudayanoor,
            Tenkasi. I have completed B.sc computer science in Thiruvalluvar
            college , Pavanasam ,Tenkasi . I am pass out in 2023. After college
            over i want 6 months course. My Course Name Front End Developer
            Using With React Js and my Institude name is cadd expert in Tenkasi.
            My Strengths are I am a quick learner and a hard worker. My
            short-term goal is to find work in a well-known organization like
            yours. My long-term goal is to attain a leading position in my
            profession.
          </p>
        </div>
        <h3>Thank You !</h3>
      </div>
      <div className="container mt-5 px-3 certificate">
        <h2>My Course Certificate And My Resume</h2>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-3 my-3" data-aos="fade-right">
            <div>
              <img src={img} width={"100%"} alt="" className="cadd" />
              <img src={img1} width={"100%"} alt="" className="d-none cadd1" />
            </div>
            <button
              onClick={handleDownload}
              className="btn btn-primary mt-3 w-100"
            >
              Download
            </button>
          </div>
          <div className="col-md-3 my-3" data-aos="fade-left">
            <div>
              <img className="resume1" src={img2} width={"100%"} alt="" />
            </div>
            <button
              onClick={handleDownload1}
              className="btn btn-primary mt-3 w-100"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
