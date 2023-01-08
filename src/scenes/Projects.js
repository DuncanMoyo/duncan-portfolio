import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, href }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 
  transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        variants={projectVariant}
        className="relative cursor-pointer "
      >
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{desc}</p>
        </div>
        <img alt="projectTitle" src={`../assets/${projectTitle}.jpeg`} />
      </motion.div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          A list of some personal projects that i've worked on and currently
          hoping to finish:
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px]
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            desc="An ecommerce app that i'm currently struggling to host, thanks to
          Heroku. Check out the code on
          Github. Built with Material UI, Strapi and Stripe --COMING SOON!"
          />
          <Project
            title="Project 2"
            href="https://d6505744.gym-typescript-cgl.pages.dev/"
            desc="A single page web app for gyms with a contact form. Built with Typescript and Tailwind CSS"
          />
          {/* ROW 2 */}
          {/* <Project title='Project 3' />
        <Project title='Project 4' />
        <Project title='Project 5' /> */}

          {/* ROW 3 */}
          <Project
            title="Project 3"
            href="https://admin-frontend-qp6d.onrender.com/"
            desc="An Admin dashboard for visualizing data. Built with a MERN stack with the aid of Material UI and Nivo charts"
          />
          <Project
            title="Project 4"
            href='https://duncbook-frontend.onrender.com'
            desc="My own version of facebook, add me as a friend. Built with a MERN stack and Material UI."
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px]
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
