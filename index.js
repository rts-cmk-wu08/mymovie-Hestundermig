
document.addEventListener("DOMContentLoaded", () => {

    fetch('https://api.themoviedb.org/3/movie/550?api_key=ee7c91fa743a5076c72bd818029cb90d')
  .then((nowPlaying) => nowPlaying.json())
  .then((nowPlaying) => console.log(nowPlaying));

  let body = document.querySelector("body")
  let div = document.createElement("div")
  div.classList.add("cards")
  div.innerHTML = `
  <img src="https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path}" alt="">
  `
  body.append(div)

})
