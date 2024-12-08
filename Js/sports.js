// Here Related For Page Sports
let sports = [
  {
    id: 1,
    image: "./Picture/sports6.jpg",
  },
  {
    id: 1,
    image: "./Picture/Swimming.jpg",
  },
  {
    id: 1,
    image: "./Picture/sports1.jpg",
  },
  {
    id: 1,
    image: "./Picture/kickbox.jpg",
  },
  {
    id: 1,
    image: "./Picture/sports2.jpg",
  },
  {
    id: 1,
    image: "./Picture/Swimming3.jpg",
  },
  {
    id: 1,
    image: "./Picture/bicycle1.jpg",
  },
  {
    id: 1,
    image: "./Picture/Swimming4.jpg",
  },
  {
    id: 1,
    image: "./Picture/Swimming1.jpg",
  },
  {
    id: 1,
    image: "./Picture/kickbox1.jpg",
  },
  {
    id: 1,
    image: "./Picture/running.jpg",
  },
  {
    id: 1,
    image: "./Picture/bicycle.jpg",
  },
  {
    id: 1,
    image: "./Picture/kickbox4.jpg",
  },
];
const appendSports = () => {
  let appendd = ``;
  for (let i = 0; i < sports.length; i++) {
    appendd += `
        <div class="card">
                <img src="${sports[i].image}" alt="">
                <div class="description">
                  <h3>Description</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam consectetur praesentium, adipisci nesciunt veritatis. Consequatur, voluptas?</p>
                  <a href="${sports[i].id}">Read More</a>
                </div>
              </div>
              
      `;
  }
  document.getElementById("sportsx").innerHTML = appendd;
};
appendSports();
