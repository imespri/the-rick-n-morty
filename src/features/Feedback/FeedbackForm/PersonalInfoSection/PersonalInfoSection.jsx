import "./PersonalInfoSection.scss";
import { FeedbackFormField } from "../FeedbackFormField/FeedbackFormField";

export function PersonalInfoSection({ register }) {
  return (
    <div className="feedback-form__section">
      <FeedbackFormField>
        <label name="username" className="feedback-form__label">
          Username
          <input
            name="username"
            className="feedback-form__input feedback-form__item"
            type="text"
            placeholder="Morty"
            autoComplete="off"
            {...register("username")}
          />
        </label>
        <label className="feedback-form__label feedback-form__label--short">
          Continents
          <select
            className="feedback-form__dropdown feedback-form__item feedback-form__item--short"
            defaultValue="default"
            {...register("continent")}
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
      </FeedbackFormField>
      <FeedbackFormField>
        <label className="feedback-form__label">
          Email
          <input
            className="feedback-form__input feedback-form__item"
            type="text"
            placeholder="morty.smith@gmail.com"
            autoComplete="off"
            {...register("email")}
          />
        </label>
        <label className="feedback-form__label feedback-form__label--short">
          Date of birth
          <input
            className="feedback-form__item"
            type="date"
            {...register("birthday")}
          />
        </label>
      </FeedbackFormField>
      <FeedbackFormField>
        <label className="feedback-form__label feedback-form__label--file">
          Profile picture
          <input
            className="feedback-form__file feedback-form__item"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            {...register("picture")}
          />
        </label>
      </FeedbackFormField>
    </div>
  );
}
