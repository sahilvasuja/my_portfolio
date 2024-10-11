import Casual_pic from '../assets/Casual_pic.jpg'; // Your main image
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6 shadow-md">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">
          About Me
          <span className="block h-1 w-24 bg-teal-600 mx-auto mt-4"></span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <motion.img
            src={Casual_pic}
            alt="Me sitting with a laptop"
            className="w-full lg:w-1/2 h-96 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Frontend Developer Card */}
          <motion.div
            className="flex flex-col items-start p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <FaCode className="w-16 h-16" color="#61dafb" />
              <h3 className="text-2xl font-bold text-teal-700">Frontend Developer</h3>
            </div>
            <p className="text-lg text-gray-800 mb-4 font-sans">
              I am a passionate Frontend Developer with extensive experience in creating responsive and interactive user interfaces using the latest web technologies. My expertise lies in:
            </p>
            <ul className="list-disc font-sans list-inside mb-4 text-gray-600">
              <motion.li whileHover={{ scale: 1.05 }} className="transition-transform duration-300">
                ⚡ Building modern web applications with React, ensuring optimal performance and user experience.
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="transition-transform duration-300">
                ⚡ Utilizing Redux Toolkit for state management in complex applications.
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="transition-transform duration-300">
                ⚡ Implementing Tailwind CSS to design visually appealing, responsive layouts.
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="transition-transform duration-300">
                ⚡ Optimizing web performance to enhance load times and responsiveness.
              </motion.li>
            </ul>
            <p className="text-gray-700 font-sans mb-4">
              With a strong focus on user-centered design, I strive to deliver seamless user experiences across various devices. I continually explore new technologies and methodologies to stay current in the ever-evolving web development landscape.
            </p>
            <p className="text-gray-700">
              Let's connect and build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
