import React from "react";
import proje1 from "../assets/projects/1.png";
import proje2 from "../assets/projects/2.png";
import proje3 from "../assets/projects/3.png";
import proje4 from "../assets/projects/4.png";
import proje5 from "../assets/projects/5.png";
import proje6 from "../assets/projects/6.png";
import proje7 from "../assets/projects/7.png";
import proje8 from "../assets/projects/8.png";
import proje9 from "../assets/projects/9.png";
import proje10 from "../assets/projects/10.png";
import proje11 from "../assets/projects/11.png";
import proje12 from "../assets/projects/12.mp4";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project p1">
        <a
          href="https://cihatcopur.github.io/Team-Members-Page-/"
          target="_blank"
        >
          <img src={proje1} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p2">
        <a href="https://stellar-smakager-68972b.netlify.app/" target="_blank">
          <img src={proje2} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p3">
        <a
          href="https://capable-arithmetic-c550e5.netlify.app/"
          target="_blank"
        >
          <img src={proje3} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p4">
        <a href="https://zesty-rolypoly-f06b46.netlify.app/" target="_blank">
          <img src={proje4} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p5">
        <a href="https://cihatcopur.github.io/Calculater-2/" target="_blank">
          <img src={proje5} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p6">
        <a
          href="https://cihatcopur.github.io/Google-Landing-Page/"
          target="_blank"
        >
          <img src={proje6} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p7">
        <a
          href="https://cihatcopur.github.io/CheckoutPage---JavaScript/"
          target="_blank"
        >
          <img src={proje7} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p8">
        <a
          href="https://cihatcopur.github.io/addLanguage--JavaScript/"
          target="_blank"
        >
          <img src={proje8} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p9">
        <a href="https://tiny-cranachan-75cc57.netlify.app/" target="_blank">
          <img src={proje9} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p10">
        <a
          href="https://cihatcopur.github.io/Todo-Project--2------JavaScript/"
          target="_blank"
        >
          <img src={proje10} alt="proje1" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p11">
        <a
          href="https://cihatcopur.github.io/Number-guess-game--JavaScript/"
          target="_blank"
        >
          <img src={proje11} alt="proje11" width="100%" height="100%" />
        </a>
      </div>
      <div className="project p12">
        <a href="#" target="_blank">
          <video src={proje12} width="100%" height="100%"></video>
        </a>
      </div>
      <div className="project p13">
        <center>
          <h1 className=" color;red">Coming Soon</h1>
        </center>
      </div>
      <div className="project p14">
        <center>
          <h1>Coming Soon</h1>
        </center>
      </div>
      <div className="project p15">
        <center>
          <h1>Coming Soon</h1>
        </center>
      </div>
    </div>
  );
};

export default Projects;
