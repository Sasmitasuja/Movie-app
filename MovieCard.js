import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie, onIncStars, onClickFav, onClickAddtocart, onDecStars } = this.props;
    const { title, plot, poster, rating, star, price, fav, isIncart } = movie;

    return (
      <div className="moviecard">
        <div className="left">
          <img src={poster} alt="Poster" />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                src="https://pngimg.com/uploads/minus/minus_PNG34.png"
                alt="dec"
                onClick={() => onDecStars(movie)}
              />
              <img
                className="stars"
                src="https://static.vecteezy.com/system/resources/previews/013/743/605/original/golden-star-icon-png.png"
                alt="star"
              />
              <img
                className="str-btn"
                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3206641/plus-circle-icon-md.png"
                alt="inc"
                onClick={() => onIncStars(movie)}
              />
              <span className="starCount">&nbsp;{star}</span>
            </div>

            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => onClickFav(movie)}
            >
              {fav ? "Unfavourite" : "Favourite"}
            </button>

            <button
              className={isIncart ? "removecart-btn" : "cart-btn"}
              onClick={() => onClickAddtocart(movie)}
            >
              {isIncart ? "Remove From Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
