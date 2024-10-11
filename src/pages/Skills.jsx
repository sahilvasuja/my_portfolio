const skillIcons = {
    Html:   "https://imgs.search.brave.com/jQSwAmrI5GnCmB3Cb9c_HTN8RBq6AO5s43ZCf4emxqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMDUxLzEwNTEy/NzcucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
    CSS: "https://imgs.search.brave.com/YRRDhWp3IhvAKu7f6eOnBaVLX-Lyjyk4ehhzibKrjOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni85MTkvOTE5ODI2/LnBuZz9zZW10PWFp/c19oeWJyaWQ",
     
    JavaScript:  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    React: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    Tailwind :  "https://imgs.search.brave.com/FiIS_nKlldX0uoNz31Z1EVjzQR9DzLzLvNqrGYb4bs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC90YWlsd2lu/ZC1jc3MtaWNvbi0x/MDI0eDYxNS1mZGVp/czVyMS5wbmc",
    Node:  "https://nodejs.org/static/images/logo.svg",
   Redux:   "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    TypeScript:  "https://imgs.search.brave.com/4n80bkcUTPYzfX347tARU6w_vhB5cxn7zICbKo-gogU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC90eXBlc2Ny/aXB0LWljb24taWNv/bi0yMDQ4eDIwNDgt/MnJoaDF6NjYucG5n",
   NextJS:  "https://imgs.search.brave.com/UqHjX0N1paeQ4ba0l-fAbuKriN6SzhaS9lbe7PUnTck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzNo/N3lpL3N0eWxlcy9j/b21tdW5pdHlJY29u/X25zcm96aHI5aWds/OTEucG5n",
     
};
const Skills = () => {
    const skills = [
        { name: 'Html', level: 90 },
        { name: 'CSS', level: 75 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 95 },
        { name: 'Redux', level: 90 },
        { name: 'NextJS', level: 80 },
        { name: 'Node', level: 80 },
        { name: 'Tailwind', level: 90 },
    ];

    return (
        <section className="py-16 bg-teal-50" id="skills">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">My Skills</h2>
                <div className="flex justify-center">
                    <div className="bg-teal-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skill) => (
                                <div key={skill.name} className='flex flex-col'>
                                    <div className='flex justify-between w-11/12 pl-12 mx-auto'>
                                        <span className="text-sm font-medium text-gray-100">{skill.name}</span>
                                        <span className="text-sm font-medium text-gray-300">{skill.level}%</span>
                                    </div>
                                    <div className="flex items-center gap-3 transform transition-transform duration-300 hover:scale-105">
                                        <img
                                            src={skillIcons[skill.name]}
                                            alt={`Icon for ${skill.name}`}
                                            className="w-14 h-14 rounded-full mb-2"
                                        />
                                        <div className="relative w-full h-4 bg-gray-200 rounded-full mb-2">
                                            <div
                                                className={`absolute top-0 left-0 h-full bg-teal-500 rounded-full transition-all duration-500`}
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
