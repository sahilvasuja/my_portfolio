import fotofolio from '../assets/fotofolio.png'
import styleHeaven from '../assets/styleHeaven.png'
export const projects = [
    {
      id: 0,
      title: "FotoFolio",
      description:
      " An optimized React application built with Redux Toolkit for state management, leveraging the Flickr API to display recent photos and enable efficient real-time search with infinite scrolling. Features include a modal for photo previews, persistent search suggestions via local storage, and a sleek, responsive UI styled with Tailwind CSS.",
      image:
      fotofolio,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit"],
      codeUrl: "https://github.com/sahilvasuja/foto-folio",
      liveUrl: "https://project-one.live",
    },
    {
      id: 1,
      title: "StyleHeaven",
      description:
        " A full-featured e-commerce website built with React and Redux Toolkit, enabling users to browse a product catalog, add or remove items from the cart, and place orders seamlessly. The cart updates in real-time, and the user-friendly interface, styled with Tailwind CSS, ensures a smooth shopping experience from browsing to checkout.",
     image: styleHeaven,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit"],
      codeUrl: "https://github.com/sahilvasuja/shopping",
      liveUrl: "https://project-two.live",
    },
    // {
    //   id: 1,
    //   title: "Real Estate",
    //   description:
    //     "Developed a user-friendly Real Estate platform using TypeScript, React, Material UI, and Vite. It features property listings, filters, and smooth navigation for an enhanced user experience.",
    //   image: "https://example.com/realestate-image.png", // Add your real image URL here
    //   technologies: ["React Js", "TypeScript", "Material UI", "Vite", "Redux"],
    //   codeUrl: "https://github.com/project-three",
    //   liveUrl: "https://project-three.live",
    // },
  ];
  