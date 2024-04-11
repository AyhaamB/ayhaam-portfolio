import { useEffect, useRef } from "react";

const Home = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const techContainer = useRef(null);
  const techIcon = useRef(null);
  const scrollArrow = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      if (aboutRef.current) {
        const topAbout = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Add a class to trigger the animation when the about section is in the viewport
        if (topAbout < windowHeight) {
          aboutRef.current.classList.add("slide-left");
        } else {
          aboutRef.current.classList.remove("slide-left");
        }
      }

      if (techRef.current) {
        const topTech = techRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Add a class to trigger the animation when the tech section is in the viewport
        if (topTech < windowHeight - 100) {
          techRef.current.querySelectorAll(".tech").forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("slide-right");
            }, index * 100); // Adjust the delay as needed
          });
        } else {
          techRef.current.querySelectorAll(".tech").forEach((item) => {
            item.classList.remove("slide-right");
          });
        }
      }

      if (techContainer.current) {
        const isScrolled =
          techContainer.current.scrollLeft > 0 &&
          techContainer.current.scrollLeft + techContainer.current.clientWidth <
            techContainer.current.scrollWidth;

        if (isScrolled) {
          techIcon.current.classList.add("hide");
        } else {
          techIcon.current.classList.remove("hide");
        }
      }
    };

    const isNearTop = window.scrollY < window.innerHeight;

    // Show or hide the scroll arrow based on the scroll position
    if (scrollArrow.current) {
      if (isNearTop) {
        scrollArrow.current.classList.remove("hide");
      } else {
        scrollArrow.current.classList.add("hide");
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8, // Scroll to 100vh
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="">
        <div className="home-main">
          <div className="home-about-container">
            <div className="profile-photo-container">
              <img
                src="/me-photo.png"
                className="profile-photo slide-left"
                alt="Photo of Ayhaam"
              ></img>
            </div>
            <div className="intro-text slide-right">
              <p className="greeting">Hi,</p>
              <p className="name">I'm Ayhaam Baksh</p>
              <p className="home-about">
                I'm a passionate web developer looking for new oppurtunites to
                grow and develop as a professional.
              </p>
            </div>
          </div>
          <div className="arrow-container bounce">
            <img
              src="/down-arrow.png"
              className="down-arrow"
              onClick={handleScrollToTop}
            ></img>
          </div>
          <h2 className="about-header">About Me</h2>
          <div ref={aboutRef} className="about-main">
            <div className="about-intro">
              <div className="about-text">
                <p className="paragraph">
                  Hey there! I am Ayhaam Baksh, a passionate and enthusiastic
                  software developer. My programming journey started with my
                  curiosity to understand how the software applications I use
                  are created. When I am not coding, you can find me exploring
                  online coding communities, reading tech blogs, and working on
                  personal coding projects.
                </p>
                <p className="paragraph">
                  I am always excited to learn something new, and the tech space
                  is constantly innovating! The world of coding has already
                  taught me many valuable lessons, and I am looking forward to
                  continue learning and growing to achieve my goals. Feel free
                  to scroll through and take a look at the technologies I use!
                </p>
              </div>
            </div>
          </div>
          <h2 className="about-header">Technologies</h2>
          <div ref={techRef} className="tech-main">
            <div className="tech-container">
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">HTML</p>
                  <img className="tech-icon" src="/html.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    Proficient in creating well-structured and semantically
                    meaningful web pages.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">CSS</p>
                  <img className="tech-icon" src="/css.svg"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    In-depth understanding of style techniques and user-friendly layouts to create seamless user experiences.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">Javascript</p>
                  <img className="tech-icon" src="/js.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    Proficient in creating well-structured and semantically
                    meaningful web pages.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">ExpressJS</p>
                  <img className="tech-icon" src="/white-express.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    Capable of building scalable server-side
                    applications using ExpressJS.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">MySQL</p>
                  <img className="tech-icon" src="/white-sql.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    Proficient in creating and managing relational databases
                    with MySQL for efficient data organization and retrieval.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">NodeJS</p>
                  <img className="tech-icon" src="/node-icon.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    Proficient in leveraging the power of NodeJs for server-side
                    scripting and backend development.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">MongoDB</p>
                  <img className="tech-icon" src="/mongo.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    Skilled in designing and implementing NoSQL databases using
                    MongoDB for flexible and scalable data storage.
                  </p>
                </div>
              </div>
              <img src="/scroll-right.png" className="tech-more"></img>
              <img src="/scroll-left.png" className="tech-more2"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
