import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Casual_pic from '../assets/Casual_pic.jpg'; 
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import SahilVasuja_Resume from '../assets/SahilVasuja_Resume.pdf'
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const buttonVariant = {
  hover: { scale: 1.1, transition: { yoyo: Infinity } },
};

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = SahilVasuja_Resume; 
    link.download = "SahilVasuja_Resume"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='h-screen bg-gray-100'>
      <section className="flex items-center  bg-gray-100 justify-center pt-32 px-6 md:px-12">
        <div className="container max-w-7xl  mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          
          {/* Text Section with Framer Motion */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left order-first md:order-none"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-teal-700">Sahil Vasuja</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 font-sans">
              A passionate Frontend Developer dedicated to creating responsive and engaging web applications. With expertise in React and modern web technologies, I design intuitive user interfaces that enhance user experiences. 
            </p>
            <motion.div className="mt-6 flex space-x-4">
  <motion.div variants={buttonVariant} whileHover="hover">
    <a href="#contact"
      className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
    >
      Contact Me
    </a>
  </motion.div>
  <motion.div variants={buttonVariant} whileHover="hover">
  <button
      onClick={handleDownload}
      className="px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
    >
      Download Resume
    </button>
    {/* <Link
     to='SahilVasuja_Resume.pdf' 
      className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300 ease-in-out"
      target="_blank" 
      download={SahilVasuja_Resume.pdf}
    >
      Resume
    </Link> */}
  </motion.div>
</motion.div>

          </motion.div>

          {/* Image Section with Framer Motion */}
          {/* <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end order-last md:order-none"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={Casual_pic} 
              alt="Hero of Sahil Vasuja"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl transition-transform duration-300"
              whileHover={{ scale: 1.05, rotate: 2, opacity: 0.9 }}
            />
          </motion.div> */}
           <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end order-last md:order-none"
      >
        <motion.img
          src={Casual_pic}
          alt="Hero of Sahil Vasuja"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl"
          animate={{
            //  scale: [1.2, 1.3, 1], // Scale up and down for flapping
            rotate: [1, 4, -4, 0], // Slight rotation for flapping effect
          }}
          transition={{
            duration: 10, // Duration of the animation
            ease: "easeInOut",
            repeat: Infinity, // Repeats the animation infinitely
          }}
        />
      </motion.div>
        </div>
      </section>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
