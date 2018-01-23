var movies = [
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: true

  },
  {
    title: "Black Panther",
    rating: 5,
    hasWatched: false
  },
  {
    title: "Dark Knight",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Happy Gilmore",
    rating: 5,
    hasWatched: true
  }
]

for(i = 0; i <= movies.length-1; i++){
  if(movies[i].hasWatched === true){
    console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars")
  }
  else{
      console.log("You have not watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars")
  }
}
