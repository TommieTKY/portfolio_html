const PROJECTLIST = [
  {
    link: "https://github.com/TommieTKY/artgallery",
    title: "Art Gallery",
    description:
      "ArtGallery is a web application built with ASP.NET Core MVC that provides a comprehensive platform for managing and exploring art galleries.",
    skills: ["C#", "ASP.NET", "MySQL"],
    image: "./image/project/artgallery.jpeg",
  },
  {
    link: "https://github.com/TommieTKY/pixelate",
    title: "Pixelate",
    description:
      "This application converts a provided image into stylized pixel art and generates instructions for recreating it using LEGO™ bricks. Users can customize both the pixel art size and the number of colors in the palette used for the LEGO™ instructions.",
    skills: ["HTML", "CSS", "PHP"],
    image: `./image/project/pixelate.png`,
  },
  {
    link: "https://tommietong.itch.io/dimsum-in-the-sea",
    title: "Dimsum in the Sea",
    description:
      "Dimsum in the Sea is an immersive game on itch.io that offers a whimsical underwater adventure with a unique culinary twist. Players navigate through a vibrant world where imaginative characters and playful challenges bring dim sum-inspired creativity to life.",
    skills: ["Unity", "C#"],
    image: `./image/project/Dimsum in the Sea.png`,
  },
  {
    link: "https://tommietky.github.io/PastGroceryFlyer/",
    title: "Tommie's Past Grocery Flyer",
    description:
      "This project presents an interactive archive of past grocery flyers, allowing users to browse historical deals and promotions with ease. Its clean, user-friendly design offers a nostalgic glimpse into previous retail advertisements.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: `./image/project/grocery.jpeg`,
  },
  {
    link: "https://tommietky.github.io/pizzamaker/",
    title: "Build Your Perfect Pizza",
    description:
      "The project is a fun and interactive web app that lets users customize their own pizza by selecting ingredients. It features a simple and user-friendly interface, making it easy to visualize and create unique pizza combinations. 🍕",
    skills: ["HTML", "CSS", "JavaScript"],
    image: `./image/project/pizza.jpeg`,
  },
  {
    link: "https://tommietky.github.io/blog/",
    title: "Blog",
    description:
      "This blog project features a simple, one-page design with a clean and minimalist layout.",
    skills: ["HTML", "CSS"],
    image: `./image/project/blog.png`,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let projectContainer = document.getElementById("projectContainer");

  PROJECTLIST.forEach((project) => {
    let skillsHTML = "";
    project.skills.forEach((skill) => {
      skillsHTML += `<span class="badge bg-warning me-2">${skill}</span>`;
    });

    projectContainer.innerHTML += `
    <div class="col">
        <a href="${project.link}" class="text-decoration-none">
        <div class="card h-100">
            <div class="card-header bg-warning-subtle">${project.title}</div>
            <div class="px-4 pt-4">
            <img src="${project.image}" class="card-img-top border border-dark-subtle" alt="${project.title}">
            </div>
            <div class="card-body">
            <p class="card-text">${project.description}</p>
            </div>
            <div class="card-footer bg-light">
            ${skillsHTML}
            </div>
        </div>
        </a>
    </div>
    `;
  });
});
