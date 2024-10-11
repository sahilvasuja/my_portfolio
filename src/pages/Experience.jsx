import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'VMS',
            role: 'ReactJS Developer',
            duration: 'Mar 2024 - Present',
            description: `
                Collaborated on the Vimanayaatra application, integrating various APIs to enhance user experience.
                Improved the flight booking feature by optimizing performance and implementing best practices for 
                state management using Redux. Worked closely with the backend team to ensure seamless data flow,
                resulting in a 30% faster booking process. Participated in regular code reviews and team meetings,
                contributing to the overall architecture and design decisions for the application.
            `,
        },
        {
            company: 'GeekyAnts',
            role: 'Trainee Software Engineer',
            duration: 'May 2022 - Sep 2023',
            description: `
                Developed and maintained a real-time tracking system for maintenance requests, improving response 
                times by 40%. Implemented a public document feature that facilitated easy access to essential documents,
                enhancing user engagement. Designed frontend architecture for various applications using React and 
                Next.js, ensuring responsive and user-friendly interfaces. Collaborated with cross-functional teams 
                to gather requirements and deliver solutions that met client expectations, contributing to multiple 
                successful project launches.
            `,
        },
    ];

    return (
        <section className="py-16  bg-gray-50" id="experience">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold text-center text-teal-600 mb-12 tracking-wide">Experience</h2>

                <div className="relative flex flex-col space-y-16 md:space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                            className="relative bg-teal-800 shadow-lg rounded-lg p-8 w-full md:w-2/3 mx-auto transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Experience Content */}
                            <h3 className="text-2xl font-semibold text-white mb-2">{exp.company}</h3>
                            <p className="text-gray-200 text-lg mb-2">{exp.role}</p>
                            <span className="text-teal-400 text-sm italic">{exp.duration}</span>
                            <p className="text-gray-100 mt-3 leading-relaxed font-sans">{exp.description}</p>

                            {/* Decorative Line Below Each Card Except Last */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-16 w-1 bg-gradient-to-b from-teal-500 to-teal-700"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
