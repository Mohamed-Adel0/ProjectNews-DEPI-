let sports = [
    {
        id: 1,
        image: "../Picture/eat8.jpg",
      },
      {
        id: 1,
        image: "../Picture/eat9.jpg",
      },
      {
        id: 1,
        image: "../Picture/eat10.jpg",
      },
      {
        id: 1,
        image: "../Picture/eat11.jpg",
      },
    {
      id: 1,
      image: "../Picture/eat1.jpg",
    },
    {
      id: 1,
      image: "../Picture/eat2.jpg",
    },
    {
      id: 1,
      image: "../Picture/eat3.jpg",
    },
    {
      id: 1,
      image: "../Picture/eat5.jpg",
    },
    {
        id: 1,
        image: "../Picture/eat6.jpg",
    },
    {
      id: 1,
      image: "../Picture/eat4.jpg",
    },
    {
        id: 1,
      image: "../Picture/eat7.jpg",
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
  