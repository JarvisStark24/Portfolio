import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with expertise in JavaScript,
        TypeScript, HTML5, CSS3, and frameworks like React, Redux, Next.js, and
        Node.js. I also have experience with Three.js, Bootstrap, TailwindCSS,
        Shadcn UI, Framer Motion, Chart.js, Lucide React, and more. 💻 Building
        responsive and interactive user interfaces using modern tools and
        libraries. Expertise in Node.js, Express.js, WebSocket, Cookie-Parser,
        Nginx, Webpack, Babel, and payment integrations like Stripe and PayPal.
        ☁️ Skilled in deploying and managing applications on AWS, Google Cloud,
        Azure, Docker, and Hostinger VPS. ⚙️ Proficient in working with APIs,
        including Meta APIs, Google Maps API, and libraries like JWT, Axios,
        Nodemailer, and Moment.js. 🛠 Adept with tools like Zustand, Supabase,
        Appwrite, Postman, Figma, Linux, Git, and Dotenv. I'm a quick learner
        and excel at collaborating closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
