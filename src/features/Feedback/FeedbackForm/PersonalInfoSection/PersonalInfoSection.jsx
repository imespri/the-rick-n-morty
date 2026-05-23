import "./PersonalInfoSection.scss";
import { validation } from "./../constants";
import { FeedbackFormBlock } from "../FeedbackFormBlock/FeedbackFormBlock";

export function PersonalInfoSection({ register, errors }) {
  return (
    <div className="feedback-form__section">
      <div className="feedback-form__field">
        <FeedbackFormBlock error={errors.username}>
          <label name="username" className="feedback-form__label">
            Username
            <input
              name="username"
              className="feedback-form__input feedback-form__item"
              type="text"
              placeholder="Morty"
              autoComplete="off"
              {...register("username", { ...validation.username })}
            />
          </label>
        </FeedbackFormBlock>
        <FeedbackFormBlock error={errors.continent}>
          <label className="feedback-form__label">
            Continents
            <select
              className="feedback-form__dropdown feedback-form__item feedback-form__item--short"
              defaultValue="default"
              {...register("continent", { ...validation.continent })}
            >
              <option value="default" disabled>
                Select
              </option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="north america">North America</option>
              <option value="south america">South America</option>
              <option value="antarctica">Antarctica</option>
              <option value="australia">Australia</option>
            </select>
          </label>
        </FeedbackFormBlock>
      </div>
      <div className="feedback-form__field">
        <FeedbackFormBlock error={errors.email}>
          <label className="feedback-form__label">
            Email
            <input
              className="feedback-form__input feedback-form__item"
              type="text"
              placeholder="morty.smith@gmail.com"
              autoComplete="off"
              {...register("email", { ...validation.email })}
            />
          </label>
        </FeedbackFormBlock>
        <FeedbackFormBlock error={errors.birthday}>
          <label className="feedback-form__label">
            Date of birth
            <input
              className="feedback-form__item"
              type="date"
              {...register("birthday", { ...validation.birthday })}
            />
          </label>
        </FeedbackFormBlock>
      </div>
      <div className="feedback-form__field">
        <FeedbackFormBlock error={errors.picture}>
          <label className="feedback-form__label">
            Profile picture
            <input
              className="feedback-form__file feedback-form__item"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              {...register("picture", { ...validation.picture })}
            />
          </label>
        </FeedbackFormBlock>
      </div>
    </div>
  );
}
