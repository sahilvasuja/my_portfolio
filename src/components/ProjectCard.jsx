
const ProjectCards = ({ project }) => {
  const des = project.description.slice(0, 90);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-gray-600 mt-2">{`${des}...`}</p>
    </div>
  );
};

export default ProjectCards;