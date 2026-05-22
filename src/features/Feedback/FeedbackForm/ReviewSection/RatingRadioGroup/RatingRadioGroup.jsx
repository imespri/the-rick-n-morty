import "./RatingRadioGroup.scss";

export function RatingRadioGroup({ register }) {
  return (
    <div className="rating">
      <label htmlFor="ratingGood">
        <input
          id="ratingGood"
          type="radio"
          name="rating"
          value="good"
          defaultChecked
          {...register("rating")}
        />
        <span className="rating__icon icon--smile-good" />
      </label>
      <label htmlFor="ratingMaybe">
        <input id="ratingMaybe" type="radio" name="rating" value="maybe" />
        <span className="rating__icon icon--smile-maybe" />
      </label>
      <label htmlFor="ratingBad">
        <input id="ratingBad" type="radio" name="rating" value="bad" />
        <span className="rating__icon icon--smile-bad" />
      </label>
    </div>
  );
}
