import "./CreateFeedbackSection.scss";
import { validation } from "./../constants";
import { FeedbackFormBlock } from "../FeedbackFormBlock/FeedbackFormBlock";

export function CreateFeedbackSection({ register, errors }) {
  return (
    <div className="feedback-form__section feedback-form__section--wide">
      <FeedbackFormBlock error={errors.isConfirm}>
        <label className="feedback-form__check">
          <input
            className="feedback-form__checkbox"
            type="checkbox"
            {...register("isConfirm", { ...validation.isConfirm })}
          />
          agree to send my data
        </label>
      </FeedbackFormBlock>
      <button className="button feedback-form__button" type="submit">
        Create feedback
      </button>
    </div>
  );
}
