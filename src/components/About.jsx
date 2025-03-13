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
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          🚀 Software Developer | Full-Stack Engineer
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a **passionate and skilled software developer** specializing in
        **full-stack web development, system design, and scalable solutions**.
        I excel at building **high-performance applications** with modern technologies.
      </motion.p>

      {/* Frontend Development */}
      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-6">
        <h3 className="text-white text-[18px] font-bold">💻 Frontend Development</h3>
        <ul className="list-disc list-inside text-secondary text-[16px]">
          <li>JavaScript, TypeScript, HTML5, CSS3</li>
          <li>React, Redux, Next.js, Three.js</li>
          <li>UI/UX with TailwindCSS, Shadcn UI, Bootstrap, Framer Motion, Lucide React, Chart.js</li>
          <li>Creating **responsive, interactive, and dynamic** user interfaces</li>
        </ul>
      </motion.div>

      {/* Backend Development */}
      <motion.div variants={fadeIn("", "", 0.3, 1)} className="mt-6">
        <h3 className="text-white text-[18px] font-bold">⚙️ Backend & Server-Side Development</h3>
        <ul className="list-disc list-inside text-secondary text-[16px]">
          <li>Node.js, Express.js, WebSocket, Cookie-Parser</li>
          <li>API Development & Integration with JWT, Axios, Nodemailer, Moment.js</li>
          <li>Scalable architecture with Nginx, Webpack, Babel</li>
          <li>Payment Gateway Integration (Stripe, PayPal)</li>
        </ul>
      </motion.div>

      {/* Cloud & DevOps */}
      <motion.div variants={fadeIn("", "", 0.4, 1)} className="mt-6">
        <h3 className="text-white text-[18px] font-bold">☁️ Cloud & DevOps</h3>
        <ul className="list-disc list-inside text-secondary text-[16px]">
          <li>Deploying & managing applications on AWS, Google Cloud, Azure, Docker, Hostinger VPS</li>
          <li>Version control & CI/CD with Git, GitHub Actions</li>
        </ul>
      </motion.div>

      {/* System Design & Scalability */}
      <motion.div variants={fadeIn("", "", 0.5, 1)} className="mt-6">
        <h3 className="text-white text-[18px] font-bold">🖥 System Design & Scalability</h3>
        <ul className="list-disc list-inside text-secondary text-[16px]">
          <li>LucidChart, Sharding, MicroServices, Load Balancers, CDN</li>
          <li>Performance optimization with Caching, Logging, Monitoring, NGINX</li>
        </ul>
      </motion.div>

      {/* Tools & Utilities */}
      <motion.div variants={fadeIn("", "", 0.6, 1)} className="mt-6">
        <h3 className="text-white text-[18px] font-bold">🛠 Tools & Utilities</h3>
        <ul className="list-disc list-inside text-secondary text-[16px]">
          <li>State management: Zustand, Redux</li>
          <li>Databases: MongoDB (Local & Atlas), Supabase, Appwrite</li>
          <li>API Testing & Design: Postman, Figma</li>
          <li>Development Environment: Linux, Dotenv</li>
        </ul>
      </motion.div>

      {/* Why Work With Me */}
      <motion.div variants={fadeIn("", "", 0.7, 1)} className="mt-8">
        <h3 className="text-white text-[18px] font-bold">🚀 Why Work With Me?</h3>
        <p className="text-secondary text-[16px]">
          I am a **quick learner and problem solver**, always eager to take on new challenges.
          I thrive in **collaborative environments**, working closely with clients to build
          **scalable, efficient, and user-friendly** solutions. Let’s bring your ideas to life!
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
