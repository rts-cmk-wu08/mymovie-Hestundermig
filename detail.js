
document.addEventListener("DOMContentLoaded", () => {

    fetch('https://api.themoviedb.org/3/movie/550?api_key=ee7c91fa743a5076c72bd818029cb90d')
  .then((noPlaying) => noPlaying.json())
  .then((noPlaying) => console.log(noPlaying));
    
})
