import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>{summary}</div>
      <ul>
        {Array.isArray(genres)
          ? genres.map((genre) => <li key={genre}>{genre}</li>)
          : null}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
