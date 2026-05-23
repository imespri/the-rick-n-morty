import "./ReviewSection.scss";
import { validation } from "./../constants";
import { RatingRadioGroup } from "./RatingRadioGroup/RatingRadioGroup";
import { FeedbackFormBlock } from "../FeedbackFormBlock/FeedbackFormBlock";

export function ReviewSection({ register, errors }) {
  return (
    <div className="feedback-form__section">
      <div className="feedback-form__field">
        <FeedbackFormBlock errors={null}>
          <label className="feedback-form__label">
            Evaluate the project
            <RatingRadioGroup register={register} />
          </label>
        </FeedbackFormBlock>
      </div>
      <div className="feedback-form__field">
        <FeedbackFormBlock error={errors.opinionText}>
          <label className="feedback-form__label">
            Describe your opinion
            <textarea
              className="feedback-form__textarea feedback-form__item"
              placeholder="What do you think about this animated series?"
              {...register("opinionText", { ...validation.opinionText })}
            />
          </label>
        </FeedbackFormBlock>
      </div>
    </div>
  );
}
