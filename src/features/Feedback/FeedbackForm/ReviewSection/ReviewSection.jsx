import "./ReviewSection.scss";
import { RatingRadioGroup } from "./RatingRadioGroup/RatingRadioGroup";

export function ReviewSection() {
  return (
    <div className="feedback-form__section">
      <div className="feedback-form__line feedback-form__line--center feedback-form__line--radio">
        <span className="feedback-form__label">Evaluate the project</span>
        <RatingRadioGroup />
      </div>
      <div className="feedback-form__line">
        <label className="feedback-form__label">
          Describe your opinion
          <textarea
            className="feedback-form__textarea feedback-form__item"
            placeholder="What do you think about this animated series?"
          />
        </label>
      </div>
    </div>
  );
}
