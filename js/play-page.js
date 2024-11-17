
    
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



document.addEventListener("DOMContentLoaded", () => {
  // Parse query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const driveLink = urlParams.get("drive"); // Get the Google Drive preview link

  // Select the merovideo div
  const merovideoDiv = document.querySelector(".merovideo");

  if (driveLink) {
      // Create the iframe element for embedding
      const iframe = document.createElement("iframe");
      iframe.src = driveLink; // Use the provided drive link
      iframe.width = "1060"; // Set the width
      iframe.height = "600"; // Set the height
      iframe.allow = "autoplay"; // Allow autoplay
      iframe.frameBorder = "0"; // Remove the border

      // Clear existing content and add the iframe
      merovideoDiv.innerHTML = ""; // Clear previous content if any
      merovideoDiv.appendChild(iframe);
  } else {
      console.error("No drive link provided in the URL.");
  }
});




const movies = {
  "Chungking Express": {
    cover: "img/chunking%20express.png",
    link: "play-page.html?title=Chungking%20Express&type=Romance/Comedy&image=img/chunking%20express.png&trailer=trailer/t1.mp4&drive=https://drive.google.com/file/d/1GrGwOog0B69DQ9sBG0rWpjuDe0JiZUA6/preview"
  },
  "Taste of Tea": {
    cover: "img/taste%20of%20tea.png",
    link: "play-page.html?title=Taste%20of%20Tea&type=Drama/Comedy&image=img/taste%20of%20tea.png&trailer=trailer/t2.mp4&drive=https://drive.google.com/file/d/1W_rWdmzbeKKuyO77Kt-pV4zIoBtj875p/preview"
  },
  "1 Million Yen Girl": {
    cover: "img/million.png",
    link: "play-page.html?title=1%20Million%20Yen%20Girl&type=Drama&image=img/million.png&trailer=trailer/t3.mp4&drive=https://drive.google.com/file/d/1StVhzyGM1KufsdCMZQROh2V15UZYj2gc/preview"
  },
  "A Dirty Carnival": {
    cover: "img/a%20dirty%20carnival.png",
    link: "play-page.html?title=A%20Dirty%20Carnival&type=Action/Thriller&image=img/cover2.png&trailer=trailer/t4.mp4&drive=https://drive.google.com/file/d/17KUm9Yf6-oUOceRyevhbOgdnwSRjr6ge/preview"
  },
  "10 Things I Hate About You": {
    cover: "img/10%20thing%20i%20hate%20about%20you.png",
    link: "play-page.html?title=10%20Things%20I%20Hate%20About%20You&type=Comedy/Romance&image=img/10%20thing%20i%20hate%20about%20you.png&trailer=trailer/t5.mp4&drive=https://drive.google.com/file/d/1w0dI9r6WqWZ80t43KcXTMCjQt9I8aTJ8/preview"
  },
  "500 Days of Summer": {
    cover: "img/500%20days%20of%20summer.png",
    link: "play-page.html?title=500%20Days%20of%20Summer&type=Comedy/Romance&image=img/500%20days%20of%20summer.png&trailer=trailer/t6.mp4&drive=https://drive.google.com/file/d/1U3tSycGi3EAt3bQjO9ZLhtY5G6_SLDdp/preview"
  },
  "A Taxi Driver": {
    cover: "img/taxi.png",
    link: "play-page.html?title=A%20Taxi%20Driver&type=Drama&image=img/taxi.png&trailer=trailer/t21.mp4&drive=https://drive.google.com/file/d/1t4lH8sAqjHcIwmvDplR9-DpGyXughdqg/preview"
  },
  "All About Lilly Chou Chou": {
    cover: "img/all%20about%20lilly%20chou%20chou.png",
    link: "play-page.html?title=All%20About%20Lilly%20Chou-Chou&type=Crime/Thriller&image=img/all%20about%20lilly%20chou%20chou.png&trailer=trailer/t8.mp4&drive=https://drive.google.com/file/d/10i51Ztrv-7tcmnWxdFRQ1ycwecWhwevZ/preview"
  },
  "April Story": {
    cover: "img/april%20story.png",
    link: "play-page.html?title=April%20Story&type=Romance/Drama&image=img/april%20story.png&trailer=trailer/t9.mp4&drive=https://drive.google.com/file/d/1CnaU1RjnbsdpqRgDV9UwCkPAXSiQzTHZ/preview"
  },
  "Butterfly Effect": {
    cover: "img/Butterfly%20Effect.png",
    link: "play-page.html?title=Butterfly%20Effect&type=Thriller/Sci-Fi&image=img/Butterfly%20Effect.png&trailer=trailer/t10.mp4&drive=https://drive.google.com/file/d/1eHV9df97vn0sk0_cW4aonK2wZVBFgTDo/preview"
  },
  "Honey and Clover": {
    cover: "img/honey%20clover.png",
    link: "play-page.html?title=Honey%20and%20Clover&type=Drama&image=img/honey%20clover.png&trailer=trailer/t11.mp4&drive=https://drive.google.com/file/d/1obZxsinh8qriuOW0CkVtWQay-MU4OBHT/preview"
  },
  "Indecision": {
    cover: "img/indecision.png",
    link: "play-page.html?title=Indecision&type=Sci-Fi/Short&image=img/indecision.png&trailer=trailer/t12.mp4&drive=https://drive.google.com/file/d/1dJTrCmlG02wtrBRvwv-4CvaFyB34rLx8/preview"
  },
  "Love Letter 1995": {
    cover: "img/love%20letter%201995.png",
    link: "play-page.html?title=Love%20letter%201995&type=Romance/Drama&image=img/love%20letter%201995.png&trailer=trailer/t13.mp4&drive=https://drive.google.com/file/d/1-NtXAIp_TvE4-u_C7CZCntJ2kRzhy-51/preview"
  },
  "Metamorphosis": {
    cover: "img/metamorphosis.png",
    link: "play-page.html?title=Metamorphosis&type=Horror/Suspense&image=img/metamorphosis.png&trailer=trailer/t14.mp4&drive=https://drive.google.com/file/d/1tIRzDOGzz5XgWAMwEgOx-NU-NNc4oRYB/preview"
  },
  "My Small Island": {
    cover: "img/My%20small%20land.png",
    link: "play-page.html?title=My%20Small%20Island&type=Drama&image=img/My%20small%20land.png&trailer=trailer/t15.mp4&drive=https://drive.google.com/file/d/11L32g2UscmkDFFDxtJZhszdK0HhHVwR-/preview"
  },
  "Nobody Knows": {
    cover: "img/nobody%20knows.png",
    link: "play-page.html?title=Nobody%20Knows&type=Drama/Family&image=img/nobody%20knows.png&trailer=trailer/t16.mp4&drive=https://drive.google.com/file/d/1bk1ocU01411bEOgAUiaBwGJRwGkM1X-B/preview"
  },
  "Nobuta wo Produce": {
    cover: "img/nobuta.png",
    link: "play-page.html?title=Nobuta%20wo%20Produce&type=Romance/Drama&image=img/nobuta.png&trailer=trailer/t17.mp4&drive=https://drive.google.com/file/d/1XeCz6rMs0C6Phgkpn-yyW6Hhyorje3qg/preview"
  },
  "Possessed": {
    cover: "img/possesed.png",
    link: "play-page.html?title=Possessed&type=Thriller&image=img/possesed.png&trailer=trailer/t18.mp4&drive=https://drive.google.com/file/d/1vkQyC2FfUHczoAY4E6WoIo5yBs-vckvD/preview"
  },
  "Shoplifters": {
    cover: "img/shoplifters.png",
    link: "play-page.html?title=Shoplifters&type=Drama&image=img/shoplifters.png&trailer=trailer/t19.mp4&drive=https://drive.google.com/file/d/1fVVBNZe1qe39ElWQnhxVu-051yhYD7QN/preview"
  },
  "The Perks of Being a Wallflower": {
    cover: "img/flower.png",
    link: "play-page.html?title=The%20Perks%20of%20Being%20a%20Wallflower&type=Drama/Romance&image=img/flower.png&trailer=trailer/t20.mp4&drive=https://drive.google.com/file/d/1cz1avzX7C5cp1ZYnFG2VEkr3aItS4h9r/preview"
  }
};

document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value.trim().toLowerCase();
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // Clear the list initially

  // Hide the movie list if the search input is empty
  if (searchTerm === "") {
    movieList.style.display = "none"; // Hide the list when search is empty
    return;
  }

  movieList.style.display = "flex"; // Show the movie list when typing

  let found = false;

  for (const [title, { cover, link }] of Object.entries(movies)) {
    if (title.toLowerCase().includes(searchTerm)) {
      // Create a new movie item
      const movieItem = document.createElement("div");
      movieItem.style.display = "flex";
      movieItem.style.alignItems = "center";
      movieItem.style.marginBottom = "10px";

      const movieLink = document.createElement("a");
      movieLink.href = link;
      movieLink.target = "_blank";  

      const movieCover = document.createElement("img");
      movieCover.src = cover;
      movieCover.alt = title;
      movieCover.style.width = "100px";
      movieCover.style.height = "auto";
      movieCover.style.borderRadius = "4px";
      movieCover.style.marginRight = "10px";

      // Create the movie title
      const movieTitle = document.createElement("span");
      movieTitle.textContent = title;
      movieTitle.style.fontSize = "1rem";
      movieTitle.style.color = "var(--text-color)";

      // Append the cover and title to the movie link
      movieLink.appendChild(movieCover);
      movieLink.appendChild(movieTitle);

      // Add the movie link to the movie item
      movieItem.appendChild(movieLink);

      // Add the movie item to the movie list
      movieList.appendChild(movieItem);

      found = true;
    }
  }

  // If no movie is found, show a message
  if (!found) {
    movieList.innerHTML = "<p>Movie not found!</p>";
  }
});


