document.addEventListener("DOMContentLoaded", () => {
  let params = new URLSearchParams(window.location.search);

  let id = params.get("id");

  console.log(id);

  let wrapperElm = document.querySelector(".wrapper");
  let apiKey = "ee7c91fa743a5076c72bd818029cb90d";

  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then((detailsite) => detailsite.json())

    .then((details) => {
      console.log(details);

      let body = document.querySelector("body");

      let div = document.createElement("div");

      div.classList.add("cards");

      div.innerHTML = `

          <article>
            <img src="https://image.tmdb.org/t/p/original${
              details.poster_path
            }" class="toppicture"  alt="">
              <h1 class="movietitle left">${details.title}</h1>
              <i class="fa-regular fa-bookmark flex-movietitle"></i>  
            </article>
            
            <div class="card__rating__container left">
              <i class="fa-solid fa-star flexRating"></i>
              <p class="cardRating">${details.vote_average.toFixed(
                1
              )}/10 IMDb</p>
            </div>
            
            <section class="description left">
              <h2 class="description">Description</h2>
              <p class="descriptionTxt">${details.overview}</p>
            </section>
            
            <div class="cast__container left">
              <div class="cast__seeMoreContainer">
                <h3 class="cast">Cast</h3>
                <button class="seeMoreBtn">See more</button>
              </div>
              <div class="all__cast__img__container">
                </div>
              </div>

              `;

      articleElm.append(div);

      let pGenre = document.querySelector(".card__genreContainer");

      details.genres.forEach((genre) => {
        let p = document.createElement("p");
        p.classList.add("genre");
        p.innerHTML = `
            ${genre.name}
            `;
        pGenre.append(p);
      });
      let pLanguage = document.querySelector(".card__infoSpokenLanguage");

      details.spoken_languages.forEach((language) => {
        let span = document.createElement("span");
        span.classList.add("languageSpan");
        span.innerHTML = `

            ${language.english_name}
            `;
        pLanguage.append(span);
      });
    });

  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  )
    .then((actors) => actors.json())
    .then((actor) => {
      let actorsImg = document.querySelector(".all__cast__img__container");

      const actorShort = actor.cast.slice(0, 4);

      actorShort.forEach((actor) => {
        let cast = document.createElement("figure");
        cast.classList.add("cast__img__container");
        cast.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original${actor.profile_path}" alt="${actor.name}" class="castImg"
        onclick="window.location.href='https://en.wikipedia.org/wiki/${actor.name}';">
        <figcaption onclick="window.location.href='https://en.wikipedia.org/wiki/${actor.name} ';">${actor.name}</figcaption>
        `;
        actorsImg.append(cast);
      });
    });

  let articleElm = document.createElement("article");
  articleElm.classList.add("article");
  wrapperElm.append(articleElm);
});
