
document.addEventListener("DOMContentLoaded", () => {

  console.log(genres)
  
  let BaseURL = "https://api.themoviedb.org/3"
  let apiKey = "ee7c91fa743a5076c72bd818029cb90d"

  let wrapperElm = document.querySelector(".wrapper")

  let headerElm = document.createElement("header")
  headerElm.classList.add("header")
  wrapperElm.append(headerElm)

  let mainElm = document.createElement("main")
  wrapperElm.append(mainElm)

  let footerElm = document.createElement("footer")
  wrapperElm.append(footerElm)

  headerElm.innerHTML = `
  <h1>MyMovies</h1>
  <button>switch</button>
  `

  let popularElm = document.createElement("section")
  popularElm.classList.add("popular")
  mainElm.append(popularElm)

  let popularHeader = document.createElement("header")
  popularHeader.innerHTML = `
    <h2>Popular</h2>
    <a href '#'>Show More</a>
  `
  popularElm.append(popularHeader)

  let popularMovies = document.createElement("div")
  popularElm.append(popularMovies)

  fetch(`${BaseURL}/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => { 

      data.results.forEach(movie => {
        let article = document.createElement("article")
        article.classList.add("movie-article")
        article.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
          <div>
            <h3>${movie.title} </h3>
            <p>${movie.vote_average}/10 IMDb</p>
            <p class="genres"></p>
          </div>
        `
        popularMovies.append(article)

        let genreElm = article.querySelector(".genres")
        movie.genre_ids.forEach(id => {
          let currentGenre = genres.find(genre => genre.id == id)
          let genreSpan = document.createElement("span")
          genreSpan.classList.add("genre__pill")
          genreSpan.innerText = currentGenre.name
          genreElm.append(genreSpan)
        })
      })
    })

});
