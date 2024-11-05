import ReactStars from "react-rating-stars-component";

const RatingComponent = ({ count = 5, size = 24, activeColor = "#ffd700" }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={count}
        onChange={ratingChanged}
        size={size}
        activeColor={activeColor}
      />
    </div>
  );
};

export default RatingComponent;
