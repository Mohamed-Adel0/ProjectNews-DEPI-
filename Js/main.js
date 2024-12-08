let menu = document.getElementsByClassName("menu")[0];
let ulx = document.getElementsByClassName("ul")[0];
let closee = document.getElementsByClassName("close")[0];

// This is related to on click Event 4 NavBar
window.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-bars") {
    ulx.classList.toggle("showLinks");
    menu.classList.add("hide");
    closee.classList.add("show");
  } else if (e.target.className == "fa-solid fa-xmark") {
    closee.classList.remove("show");
    menu.classList.add("show");
    menu.classList.remove("hide");
    ulx.classList.toggle("showLinks");
  }
});

// Here For Fake API to reduce the size of the data in my file
let news = [
  {
    id: 1,
    BigImage: "./Picture/news6.jpg",
    image: "./Picture/news4.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "./Picture/kickbox4.jpg",
    image: "./Picture/kickbox.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "./Picture/news2.jpg",
    image: "./Picture/porgraming.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "./Picture/Swimming3.jpg",
    image: "./Picture/Swimming.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "./Picture/subway.jpg",
    image: "./Picture/subway1.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
];
let newsTwo = [
  {
    id: 1,
    BigImage: "https://www.youtube.com/watch?v=6kaf0LxcVV4",
    image: "./Picture/porgraming.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "https://www.youtube.com/watch?v=f0oy-NicIgE",
    image: "./Picture/subway1.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "https://www.youtube.com/watch?v=BTfzvybLgaU",
    image: "./Picture/news6.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "https://www.youtube.com/watch?v=YoUmQKcoFdE",
    image: "./Picture/sports-gym.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
  {
    id: 1,
    BigImage: "https://www.youtube.com/watch?v=oclE-QyPHsY",
    image: "./Picture/Swimming4.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam sapiente architecto delectus sequi?",
    title: "Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem.",
    goals: "Goals",
    textGoals:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum similique quisquam eaque libero sapiente perspiciatis? Illo ut mollitia temporibus fugiat quisquam ipsa facere ducimus error, velit commodi asperiores omnis!",
  },
  // Here For New Object
];

const append = () => {
  let appendd = ``;
  for (let i = 0; i < news.length; i++) {
    appendd += `
            <div class="card">
              <div class="news-one">
              <img src="${news[i].BigImage}" alt="">
              <div class="bg"></div>
              </div>
              <div class="news-two">
                <img src="${news[i].image}" alt="">
                <p>${news[i].paragraph}</p>
              </div>
              <div class="news-two">
                <h3>${news[i].title}</h3>
                <p>${news[i].text}</p>
                <h3>${news[i].goals}</h3>
                <p>${news[i].textGoals}</p>
              </div>
            </div>
    `;
  }
  document.getElementById("cards").innerHTML = appendd;
};
append();
const appended = () => {
  let appendd = ``;
  for (let i = 0; i < newsTwo.length; i++) {
    let embedLink = newsTwo[i].BigImage ? newsTwo[i].BigImage.replace("watch?v=", "embed/") : "";
    appendd += `
      <div class="card">
        <div class="news-two">
          <h3>${newsTwo[i].title}</h3>
          <p>${newsTwo[i].text}</p>
          <h3>${newsTwo[i].goals}</h3>
          <p>${newsTwo[i].textGoals}</p>
        </div>
        <div class="news-two">
          <p>${newsTwo[i].paragraph}</p>
          <img src="${newsTwo[i].image}" alt="">
        </div>
        <div class="news-one">
          <iframe 
            src="${embedLink}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
    
  }
  document.getElementById("another-cards").innerHTML = appendd;
};
appended();

// This is related to the scroll event
let topp = document.getElementById("top");
let parent = document.getElementById("ap-top");
topp.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-arrow-up") {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, 0);
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1177) {
    parent.classList.add("show");
  } else {
    parent.classList.remove("show");
  }
});

// This is Related To change Page
// document.getElementById("home").addEventListener("click", () =>{
//   window.location.href = "https://mohamed-adel0.github.io/ProjectNews-DEPI/index.html";
// })
// document.getElementById("sports").addEventListener("click", () =>{
//   window.location.href = "https://mohamed-adel0.github.io/ProjectNews-DEPI/sports.html";
// })
// document.getElementById("healty").addEventListener("click", () =>{
//   window.location.href = "https://mohamed-adel0.github.io/ProjectNews-DEPI/healty.html";
// })