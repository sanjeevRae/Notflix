
    
    //test-1
    
    // // Function to extract query parameters
    // function getQueryParams() {
    //     const params = new URLSearchParams(window.location.search);
    //     return {
    //         title: params.get("title"),
    //         type: params.get("type"),
    //         image: params.get("image"),
    //         trailer: params.get("trailer"),
    //     };
    // }


    // function populatePlayPage() {
    //     const movie = getQueryParams();

    //     // Debugging step: Log the extracted parameters
    //     console.log("Extracted movie data:", movie);

    //     // Check if all required parameters are available
    //     if (!movie.title || !movie.type || !movie.image || !movie.trailer) {
    //         document.body.innerHTML = "<h1>Movie not found!</h1>";
    //         return;
    //     }

    //     document.title = movie.title; // Update browser title
    //     document.querySelector(".play-img").src = movie.image; // Movie poster
    //     document.querySelector(".play-text h2").textContent = movie.title; // Movie title
    //     document.querySelector(".tags").innerHTML = movie.type.split('/').map(tag => `<span>${tag}</span>`).join('');
    //     document.querySelector(".watch-btn").href = movie.trailer; // Trailer link
    //     document.querySelector("#myvideo").src = movie.trailer; // Video source


    //     document.querySelector(".about-movie h2").textContent = movie.title;
    //     document.querySelector(".about-movie p").textContent = `${movie.title} is a ${movie.type} movie.`;
    // }

    // document.addEventListener("DOMContentLoaded", populatePlayPage);







//test-2
// function getQueryParams() {
//   const params = new URLSearchParams(window.location.search);
//   return {
//       title: params.get("title"),
//       type: params.get("type"),
//       image: params.get("image"),
//       trailer: params.get("trailer"),
//   };
// }


// const movieCast = {
//   "Chungking Express": [
//       { name: "Tony Leung Chiu-wai", image: "cast/1.png" },
//       { name: "Takeshi Kaneshiro", image: "cast/2.png" },
//       { name: "Brigitte Lin", image: "cast/3.png" },
//       { name: "Faye Wong", image: "cast/4.png" },
//   ],
//   "Taste of Tea": [
//       { name: "Tadanobu Asano", image: "cast/5.png" },
//       { name: "Maya Banno", image: "cast/6.png" },
//       { name: "Takahiro Sato", image: "cast/7.png" },
//       { name: "Hideaki Anno", image: "cast/8.png" },
//   ],
//   "1 Million Yen Girl": [
//       { name: "Yû Aoi", image: "cast/9.png" },
//       { name: "Mirai Moriyama", image: "cast/10.png" },
//       { name: "Terunosuke Takezai", image: "cast/11.png" },
//       { name: "Pierre Taki", image: "cast/12.png" },
//   ],
//   "A Dirty Carnival": [
//       { name: "Zo In-sung", image: "cast/13.png" },
//       { name: "CHUN Ho-jin", image: "cast/14.png" },
//       { name: "Namgoong Min", image: "cast/15.png" },
//       { name: "Lee Bo-young", image: "cast/16.png" },
//   ],
//   "10 Things I Hate About You": [
//       { name: "Julia Stiles", image: "cast/17.png" },
//       { name: "Heath Ledger", image: "cast/18.png" },
//       { name: "Joseph Gordon-Levitt", image: "cast/19.png" },
//       { name: "Larisa Oleynik", image: "cast/20.png" },
//   ],
//   "500 Days of Summer": [
//       { name: "Joseph Gordon-Levitt", image: "cast/19.png" },
//       { name: "Zooey Deschanel", image: "cast/22.png" },
//       { name: "Chloë Grace Moretz", image: "cast/23.png" },
//       { name: "Marc Webb", image: "cast/24.png" },
//   ],
//   "A Taxi Driver": [
//       { name: "SONG Kang-ho", image: "cast/25.png" },
//       { name: "Heo Jung-do", image: "cast/26.png" },
//       { name: "Lee Ho Chul", image: "cast/27.png" },
//       { name: "Ryu Jun-yeol", image: "cast/28.png" },
//   ],
//   "All About Lilly Chou Chou": [
//       { name: "Hayato Ichihara", image: "cast/29.png" },
//       { name: "Yû Aoi", image: "cast/30.png" },
//       { name: "Yû Aoi", image: "cast/9.png" },
//       { name: "Ayumi Ito", image: "cast/32.png" },
//   ],
//   "April Story": [
//       { name: "Takako Matsu", image: "cast/33.png" },
//       { name: "Kahori Fujii", image: "cast/34.png" },
//       { name: "Seiichi Tanabe", image: "cast/35.png" },
//       { name: "Kazuhiko Katō", image: "cast/36.png" },
//   ],
//   "Butterfly Effect": [
//       { name: "Ashton Kutcher", image: "cast/37.png" },
//       { name: "Amy Smart", image: "cast/38.png" },
//       { name: "Logan Lerman", image: "cast/39.png" },
//       { name: "Ethan Suplee", image: "cast/40.png" },
//   ],
//   "Honey and Clover": [
//       { name: "Sho Sakurai", image: "cast/41.png" },
//       { name: "Yû Aoi", image: "cast/9.png" },
//       { name: "Yusuke Iseya", image: "cast/43.png" },
//       { name: "Ryô Kase", image: "cast/44.png" },
//   ],
//   "Indecision": [
//       { name: "Brooke Livingston", image: "cast/45.png" },
//       { name: "Storm Tracy", image: "cast/46.png" },
//       { name: "Stephanie Gutierrez-Diaz", image: "cast/47.png" },
//       { name: "Zoe Wilde", image: "cast/48.png" },
//   ],
//   "Love Letter 1995": [
//       { name: "Miho Nakayama", image: "cast/46.png" },
//       { name: "Etsushi Toyokawa", image: "cast/47.png" },
//       { name: "Bunjaku Han", image: "cast/48.png" },
//       { name: "Takashi Kashiwabara", image: "cast/49.png" },
//   ],
//   "Metamorphosis": [
//       { name: "Jang Young Nam", image: "cast/50.png" },
//       { name: "Nico Locco", image: "cast/51.png" },
//       { name: "Sung Dong-il", image: "cast/52.png" },
//       { name: "Kim Hye-jun", image: "cast/53.png" },
//   ],
//   "My Small Island": [
//       { name: "Lina Arashi", image: "cast/54.png" },
//       { name: "Sahel Rosa", image: "cast/55.png" },
//       { name: "Chizuru Ikewaki", image: "cast/56.png" },
//       { name: "Daiken Okudaira", image: "cast/57.png" },
//   ],
//   "Nobody Knows": [
//       { name: "Ryu Deok-hwan", image: "cast/58.png" },
//       { name: "Kim Seo-hyung", image: "cast/59.png" },
//       { name: "Ahn Ji-ho", image: "cast/60.png" },
//       { name: "Park Hoon", image: "cast/61.png" },
//   ],
//   "Nobuta wo Produce": [
//       { name: "Kazuya Kamenashi", image: "cast/62.png" },
//       { name: "Horikita Maki", image: "cast/63.png" },
//       { name: "Tomohisa Yamashita", image: "cast/64.png" },
//       { name: "Erika Toda", image: "cast/65.png" },
//   ],
//   "Possessed": [
//       { name: "Timothy Dalton", image: "cast/66.png" },
//       { name: "Henry Czerny", image: "cast/67.png" },
//       { name: "Piper Laurie", image: "cast/68.png" },
//       { name: "Jonathan Malen", image: "cast/69.png" },
//   ],
//   "Shoplifters": [
//       { name: "Sakura Ando", image: "cast/70.png" },
//       { name: "Kirin Kiki", image: "cast/71.png" },
//       { name: "Mayu Matsuoka", image: "cast/72.png" },
//       { name: "Lily Franky", image: "cast/73.png" },
//   ],
//   "The Perks of Being a Wallflower": [
//       { name: "Logan Lerman", image: "cast/74.png" },
//       { name: "Emma Watson", image: "cast/75.png" },
//       { name: "Ezra Miller", image: "cast/76.png" },
//       { name: "Johnny Simmons", image: "cast/77.png" },
//   ],
//   "Parasite": [
//       { name: "Lee Sun-kyun", image: "cast/78.png" },
//       { name: "Cho Yeo-jeong", image: "cast/79.png" },
//       { name: "Park So-dam", image: "cast/80.png" },
//       { name: "Choi Woo-shik", image: "cast/81.png" },
//   ]
// };

// // Populate the page dynamically
// function populatePlayPage() {
//   const movie = getQueryParams();

//   // Debugging step: Log the extracted parameters
//   console.log("Extracted movie data:", movie);

//   // Check if all required parameters are available
//   if (!movie.title || !movie.type || !movie.image || !movie.trailer) {
//       document.body.innerHTML = "<h1>Movie not found!</h1>";
//       return;
//   }

//   const movieData = movieCast[movie.title] || [];

//   if (movieData.length === 0) {
//       console.log("No data found for movie:", movie.title);
//       document.body.innerHTML = "<h1>Movie not found!</h1>";
//       return;
//   }

//   const movieContainer = document.querySelector('.movie-container');
//   const titleElement = document.querySelector('.movie-title');
//   const genreElement = document.querySelector('.movie-genre');
//   const imageElement = document.querySelector('.movie-image');
//   const trailerElement = document.querySelector('.movie-trailer');
//   const castElement = document.querySelector('.movie-cast');

//   titleElement.textContent = movie.title;
//   genreElement.textContent = movie.type;
//   imageElement.src = movie.image;
//   trailerElement.src = movie.trailer;

//   movieData.forEach((actor) => {
//       const actorElement = document.createElement('div');
//       actorElement.classList.add('actor');

//       const actorImage = document.createElement('img');
//       actorImage.src = actor.image;
//       actorElement.appendChild(actorImage);

//       const actorName = document.createElement('p');
//       actorName.textContent = actor.name;
//       actorElement.appendChild(actorName);

//       castElement.appendChild(actorElement);
//   });
// }

// populatePlayPage();



//test-3

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
      title: params.get("title"),
      type: params.get("type"),
      image: params.get("image"),
      trailer: params.get("trailer"),
  };
}

// Define the cast data for each movie
const movieCast = {
  "Chungking Express": [
    { "name": "Tony Leung Chiu-wai", "image": "cast/1.png" },
    { "name": "Takeshi Kaneshiro", "image": "cast/2.png" },
    { "name": "Brigitte Lin", "image": "cast/3.png" },
    { "name": "Faye Wong", "image": "cast/4.png" }
  ],
  "Taste of Tea": [
    { "name": "Tadanobu Asano", "image": "cast/5.png" },
    { "name": "Maya Banno", "image": "cast/6.png" },
    { "name": "Takahiro Sato", "image": "cast/7.png" },
    { "name": "Hideaki Anno", "image": "cast/8.png" }
  ],
  "1 Million Yen Girl": [
    { "name": "Yû Aoi", "image": "cast/9.png" },
    { "name": "Mirai Moriyama", "image": "cast/10.png" },
    { "name": "Terunosuke Takezai", "image": "cast/11.png" },
    { "name": "Pierre Taki", "image": "cast/12.png" }
  ],
  "A Dirty Carnival": [
    { "name": "Zo In-sung", "image": "cast/13.png" },
    { "name": "CHUN Ho-jin", "image": "cast/14.png" },
    { "name": "Namgoong Min", "image": "cast/15.png" },
    { "name": "Lee Bo-young", "image": "cast/16.png" }
  ],
  "10 Things I Hate About You": [
    { "name": "Julia Stiles", "image": "cast/17.png" },
    { "name": "Heath Ledger", "image": "cast/18.png" },
    { "name": "Joseph Gordon-Levitt", "image": "cast/19.png" },
    { "name": "Larisa Oleynik", "image": "cast/20.png" }
  ],
  "500 Days of Summer": [
    { "name": "Joseph Gordon-Levitt", "image": "cast/19.png" },
    { "name": "Zooey Deschanel", "image": "cast/22.png" },
    { "name": "Chloë Grace Moretz", "image": "cast/23.png" }
  ],
  "A Taxi Driver": [
    { "name": "SONG Kang-ho", "image": "cast/25.png" },
    { "name": "Heo Jung-do", "image": "cast/26.png" },
    { "name": "Lee Ho Chul", "image": "cast/27.png" },
    { "name": "Ryu Jun-yeol", "image": "cast/28.png" }
  ],
  "All About Lilly Chou-Chou": [
    { "name": "Hayato Ichihara", "image": "cast/29.png" },
    { "name": "Hayato Ichihara", "image": "cast/30.png" },
    { "name": "Yû Aoi", "image": "cast/9.png" },
    { "name": "Ayumi Ito", "image": "cast/32.png" }
  ],
  "April Story": [
    { "name": "Takako Matsu", "image": "cast/33.png" },
    { "name": "Kahori Fujii", "image": "cast/34.png" },
    { "name": "Seiichi Tanabe", "image": "cast/35.png" },
    { "name": "Kazuhiko Katō", "image": "cast/36.png" }
  ],
  "Butterfly Effect": [
    { "name": "Ashton Kutcher", "image": "cast/37.png" },
    { "name": "Amy Smart", "image": "cast/38.png" },
    { "name": "Logan Lerman", "image": "cast/39.png" },
    { "name": "Ethan Suplee", "image": "cast/40.png" }
  ],
  "Honey and Clover": [
    { "name": "Sho Sakurai", "image": "cast/41.png" },
    { "name": "Yû Aoi", "image": "cast/9.png" },
    { "name": "Yusuke Iseya", "image": "cast/43.png" },
    { "name": "Ryô Kase", "image": "cast/44.png" }
  ],
  "Indecision": [
    { "name": "Brooke Livingston", "image": "cast/45.png" },
    { "name": "Storm Tracy", "image": "cast/46.png" },
    { "name": "Stephanie Gutierrez-Diaz", "image": "cast/47.png" },
    { "name": "Zoe Wilde", "image": "cast/48.png" }
  ],
  "Love letter 1995": [
    { "name": "Miho Nakayama", "image": "cast/46.png" },
    { "name": "Etsushi Toyokawa", "image": "cast/47.png" },
    { "name": "Bunjaku Han", "image": "cast/48.png" },
    { "name": "Takashi Kashiwabara", "image": "cast/49.png" }
  ],
  "Metamorphosis": [
    { "name": "Jang Young Nam", "image": "cast/50.png" },
    { "name": "Nico Locco", "image": "cast/51.png" },
    { "name": "Sung Dong-il", "image": "cast/52.png" },
    { "name": "Kim Hye-jun", "image": "cast/53.png" }
  ],
  "My Small Island": [
    { "name": "Lina Arashi", "image": "cast/54.png" },
    { "name": "Sahel Rosa", "image": "cast/55.png" },
    { "name": "Chizuru Ikewaki", "image": "cast/56.png" },
    { "name": "Daiken Okudaira", "image": "cast/57.png" }
  ],
  "Nobody Knows": [
    { "name": "Ryu Deok-hwan", "image": "cast/58.png" },
    { "name": "Kim Seo-hyung", "image": "cast/59.png" },
    { "name": "Ahn Ji-ho", "image": "cast/60.png" },
    { "name": "Park Hoon", "image": "cast/61.png" }
  ],
  "Nobuta wo Produce": [
    { "name": "Kazuya Kamenashi", "image": "cast/62.png" },
    { "name": "Horikita Maki", "image": "cast/63.png" },
    { "name": "Tomohisa Yamashita", "image": "cast/64.png" },
    { "name": "Erika Toda", "image": "cast/65.png" }
  ],
  "Possessed": [
    { "name": "Timothy Dalton", "image": "cast/66.png" },
    { "name": "Henry Czerny", "image": "cast/67.png" },
    { "name": "Piper Laurie", "image": "cast/68.png" },
    { "name": "Jonathan Malen", "image": "cast/69.png" }
  ],
  "Shoplifters": [
    { "name": "Sakura Ando", "image": "cast/70.png" },
    { "name": "Kirin Kiki", "image": "cast/71.png" },
    { "name": "Mayu Matsuoka", "image": "cast/72.png" },
    { "name": "Lily Franky", "image": "cast/73.png" }
  ],
  "The Perks of Being a Wallflower": [
    { "name": "Logan Lerman", "image": "cast/74.png" },
    { "name": "Emma Watson", "image": "cast/75.png" },
    { "name": "Ezra Miller", "image": "cast/76.png" },
    { "name": "Johnny Simmons", "image": "cast/77.png" }
  ],
  "Parasite": [
    { "name": "Lee Sun-kyun", "image": "cast/78.png" },
    { "name": "Cho Yeo-jeong", "image": "cast/79.png" },
    { "name": "Park So-dam", "image": "cast/80.png" },
    { "name": "Choi Woo-shik", "image": "cast/81.png" }
  ],
}
;

// Populate the page dynamically
function populatePlayPage() {
  const movie = getQueryParams();

  // Debugging step: Log the extracted parameters
  console.log("Extracted movie data:", movie);

  // Ensure we have all required parameters
  if (!movie.title || !movie.type || !movie.image || !movie.trailer) {
      document.body.innerHTML = "<h1>Movie not found or missing parameters!</h1>";
      console.error("Missing parameters: ", movie);
      return;
  }

  // Normalizing the title to handle case sensitivity (ensure it's exact match)
  const normalizedTitle = movie.title.trim();
  const movieData = movieCast[normalizedTitle];

  if (!movieData) {
      document.body.innerHTML = "<h1>Movie data not available!</h1>";
      console.error(`No data found for movie: ${normalizedTitle}`);
      return;
  }

  // Update content dynamically
  document.title = movie.title; // Update browser title
  document.querySelector(".play-img").src = movie.image; // Movie poster
  document.querySelector(".play-text h2").textContent = movie.title; // Movie title
  document.querySelector(".tags").innerHTML = movie.type.split('/').map(tag => `<span>${tag}</span>`).join(''); // Tags
  document.querySelector(".watch-btn").href = movie.trailer; // Trailer link
  document.querySelector("#myvideo").src = movie.trailer; // Video source

  // Update "About Movie" section
  document.querySelector(".about-movie h2").textContent = movie.title;
  document.querySelector(".about-movie p").textContent = `${movie.title} is a ${movie.type} movie.`;

  // Populate the cast
  const castContainer = document.querySelector(".cast"); // Assuming you have a div with class 'cast'
  castContainer.innerHTML = ''; // Clear any previous cast

  movieData.forEach(actor => {
      const castBox = document.createElement("div");
      castBox.classList.add("cast-box");

      const actorImage = document.createElement("img");
      actorImage.src = actor.image;
      actorImage.classList.add("cast-img");
      castBox.appendChild(actorImage);

      const actorTitle = document.createElement("span");
      actorTitle.classList.add("cast-title");
      actorTitle.textContent = actor.name;
      castBox.appendChild(actorTitle);

      castContainer.appendChild(castBox);
  });
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", populatePlayPage);


// Function to open the video container
// Function to open the video container
function openVideo() {
  document.getElementById("video-container").classList.add("show-video");
}

// Function to close the video container
function closeVideo() {
  document.getElementById("video-container").classList.remove("show-video");
}




