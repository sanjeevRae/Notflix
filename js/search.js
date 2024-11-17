
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
