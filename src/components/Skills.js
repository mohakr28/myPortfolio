import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import PercentageCircle from "./PercentageCircle";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in web application development using modern
                technologies such as React and Next.js to craft sophisticated
                and interactive user interfaces. With extensive experience in
                both front-end and back-end development using Node.js, I am
                capable of building comprehensive and robust applications. My
                portfolio includes diverse projects ranging from e-commerce
                platforms to management applications, all adhering to design
                standards and best practices, resulting in distinctive user
                experiences and optimized performance.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <PercentageCircle percentage={"80"} color={"#F97136"} />
                  <h5>html</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"70"} color={"#254bdd"} />
                  <h5>css</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"70"} color={"#efd81d"} />

                  <h5>java script</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"80"} color={"#087a9f"} />

                  <h5>React js</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"75"} color={"#7cd554"} />

                  <h5>Node js </h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"65"} color={"#087a9f"} />

                  <h5>Next js</h5>
                </div>

                <div className="item">
                  <PercentageCircle percentage={"65"} color={"#7377ad"} />

                  <h5>php</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"65"} color={"#f72c1f"} />

                  <h5>laravel</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"65"} color={"#dddddd"} />

                  <h5>wordpress</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"65"} color={"#dd8800"} />

                  <h5>mysql</h5>
                </div>
                <div className="item">
                  <PercentageCircle percentage={"65"} color={"#03e461"} />

                  <h5>mongo db</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
