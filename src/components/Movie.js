
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, img, summary, genres}){ // Movie(props)
    return(
        <div >
            <img src={img} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2> 
            {/* <h2><a href="/movie">{title}</a></h2> */}
            <p>{summary}</p>
            <ul>
            {genres.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ul>
        </div>

    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie