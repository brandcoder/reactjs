import { useEffect, useState } from "react";
import Movie from "../components/Movie"
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const callapi = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    const json = await callapi.json();

    setMovies(json.data.movies);
    setLoading(false);
    console.log("getMovies");
 
    // ************* OLD STYLE CASE 2 **********
    
    // setMovies(json.data.movies);
    // setLoading(false);
    // console.log("getMovies 2");

        // ************* OLD STYLE CASE 1 **********
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // )
    //   //https://yts.mx/api/v2/movie_details.json?movie_id=37384
    // .then((response)=> response.json())
    // .then((json)=>{
    //   setMovies(json.data.movies);
    //   setLoading(false);
    //   console.log("getMovies 3");
    // })

  }

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
           <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            summary={movie.summary}
            img={movie.medium_cover_image}
            genres={movie.genres}
           />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;