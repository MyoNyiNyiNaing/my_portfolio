import "./projects.css";
import { projects } from "./projects";
import ProjectsCard from "./ProjectsCard";
import "aos/dist/aos.css"
import Aos from "aos";

const Projects = () => {
  Aos.init();
  return (
    <div id="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className="">
      <div className="max-w-[1215px] px-5 mx-auto flex flex-col gap-4 md:flex-row items-start md:items-center justify-between ">
        <div className="">
          <div>
            <h6 className=" text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block uppercase tracking-[4px]">
              Projects
            </h6>
          </div>
          <div className=" mt-[20px]">
            <h2 className=" text-[36px] sm:text-[40px] md:text-[50px] font-bold dark:text-[#fff] text-[#000]">
              I bring results
              <br />
              My clients are proof
            </h2>
          </div>
        </div>
        <div className=" font-medium relative">
          <div className="button_up transition-all duration-300">
            <div className=" text-[#fff] font-medium text-[18px] leading-[100%]">
              View all projects
            </div>
          </div>
          <div className="button_down"></div>
        </div>
      </div>
      <div className="grid grid-col-1 items-center justify-center md:grid-cols-3 gap-x-5 max-w-[1215px] px-5 mx-auto pt-[65px] gap-10">
        {projects.map((project) => (
          <div className="group">
            <ProjectsCard key={project.id} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
