document.addEventListener("DOMContentLoaded", () => {

  let apiKey = "ee7c91fa743a5076c72bd818029cb90d";

  fetch(`https://api.themoviedb.org/3/movie/${results}?api_key=${apiKey}`)
    .then((detailsite) => detailsite.json())

    .then((details) => {
      console.log(details);

      let body = document.querySelector("body");

      details.results.forEach((detailsite) => {
        let div = document.createElement("div");
        
        div.classList.add("cards");
        
        div.innerHTML = `
            <div>
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}"  alt="">
              </div>
              `;
        articleElm.append(div);
      });
    });

    let articleElm = document.createElement("article");
    articleElm.classList.add("article");
    wrapperElm.append(articleElm);

    let wrapperElm = document.querySelector(".wrapper");

});