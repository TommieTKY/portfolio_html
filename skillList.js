const SKILLLIST = [
  {
    name: "HTML",
    src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  },
  {
    name: "JavaScript",
    src: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000",
  },
  {
    name: "Node.js",
    src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
  {
    name: "Express.js",
    src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
  },
  {
    name: "MongoDb",
    src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    name: "Bootstrap",
    src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
  },
  {
    name: "React",
    src: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    name: "PHP",
    src: "https://img.icons8.com/?size=100&id=JybIpZjjXT0F&format=png&color=000000",
  },
  {
    name: "Laravel",
    src: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
  },
  {
    name: "C#",
    src: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000",
  },
  {
    name: "ASP.NET",
    src: "https://img.icons8.com/?size=100&id=59890&format=png&color=000000",
  },
  {
    name: "MySQL",
    src: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
  },
  {
    name: "Python",
    src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "Unity",
    src: "https://img.icons8.com/?size=100&id=39848&format=png&color=000000",
  },
  {
    name: "Figma",
    src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let skillContainer = document.getElementById("skillContainer");
  SKILLLIST.forEach((skill) => {
    skillContainer.innerHTML += `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`;
  });
});
