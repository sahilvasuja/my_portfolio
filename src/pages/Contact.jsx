import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <footer id="contact" className="bg-teal-600 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-left text-center my-auto">
            <h2 className="text-5xl text-teal-50  font-bold mb-3 animate__animated animate__fadeIn">
              Contact
            </h2>
            <p className="text-lg text-gray-200 animate__animated animate__fadeIn animate__delay-1s">
              Feel free to reach out!
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            <li className="flex items-center space-x-2 p-4 bg-teal-700 hover:bg-teal-800 transition duration-300 rounded-md">
              <MdEmail size={40} className="hover:text-teal-100" />
              <a
                href="mailto:sahilvasuja5@gmail.com"
                className="text-lg hover:text-teal-100 font-semibold"
                aria-label="Email Sahil Vasuja"
              >
                sahilvasuja5@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2 p-4 bg-teal-700 hover:bg-teal-800 transition duration-300 rounded-md">
              <FaLinkedin size={40} className="hover:text-teal-100" />
              <a
                href="https://www.linkedin.com/in/sahilvasuja-b73401210/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-teal-100 font-semibold"
                aria-label="LinkedIn Profile"
              >
                linkedin.com/in/sahilvasuja-b73401210/
              </a>
            </li>
            <li className="flex items-center space-x-2 p-4 bg-teal-700 hover:bg-teal-800 transition duration-300 rounded-md">
              <FaGithub size={40} className="hover:text-teal-100" />
              <a
                href="https://github.com/sahilvasuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-teal-100 font-semibold"
                aria-label="GitHub Profile"
              >
                github.com/sahilvasuja
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
