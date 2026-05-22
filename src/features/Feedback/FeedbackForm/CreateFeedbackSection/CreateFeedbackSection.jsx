import "./CreateFeedbackSection.scss";

export function CreateFeedbackSection({ register }) {
  return (
    <div className="feedback-form__section feedback-form__section--wide">
      <label className="feedback-form__check">
        <input
          className="feedback-form__checkbox"
          type="checkbox"
          {...register("isConfirm")}
        />
        agree to send my data
      </label>
      <button className="button feedback-form__button" type="submit">
        Create feedback
      </button>
    </div>
  );
}
