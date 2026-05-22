import "./ReviewSection.scss";
import { RatingRadioGroup } from "./RatingRadioGroup/RatingRadioGroup";
import { FeedbackFormField } from "./../FeedbackFormField/FeedbackFormField";

export function ReviewSection({ register }) {
  return (
    <div className="feedback-form__section">
      <FeedbackFormField>
        <label className="feedback-form__label">
          Evaluate the project
          <RatingRadioGroup register={register} />
        </label>
      </FeedbackFormField>
      <FeedbackFormField>
        <label className="feedback-form__label">
          Describe your opinion
          <textarea
            className="feedback-form__textarea feedback-form__item"
            placeholder="What do you think about this animated series?"
            {...register("opinionText")}
          />
        </label>
      </FeedbackFormField>
    </div>
  );
}
