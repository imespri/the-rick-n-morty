import "./FeedbackForm.scss";

export function FeedbackForm() {
  return (
    <div className="feedback-form">
      <h3 className="feedback-form__header">Send us your feedback!</h3>
      <div className="feedback-form__container">
        <form className="feedback-form__form">
          <div className="feedback-form__section">
            <div className="feedback-form__line">
              <label className="feedback-form__label">
                Username
                <input
                  className="feedback-form__input feedback-form__item"
                  type="text"
                  placeholder="Morty"
                  autoComplete="off"
                />
              </label>
              <label className="feedback-form__label feedback-form__label--short">
                Continents
                <select
                  className="feedback-form__dropdown feedback-form__item feedback-form__item--short"
                  defaultValue="default"
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
            </div>
            <div className="feedback-form__line">
              <label className="feedback-form__label">
                Email
                <input
                  className="feedback-form__input feedback-form__item"
                  type="text"
                  placeholder="morty.smith@gmail.com"
                  autoComplete="off"
                />
              </label>
              <label className="feedback-form__label feedback-form__label--short">
                Date of birth
                <input className="feedback-form__item" type="date" />
              </label>
            </div>
            <div className="feedback-form__line">
              <label className="feedback-form__label feedback-form__label--file">
                Profile picture
                <input
                  className="feedback-form__file feedback-form__item"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                />
              </label>
            </div>
          </div>
          <div className="feedback-form__section">
            <div className="feedback-form__line feedback-form__line--center feedback-form__line--radio">
              <span className="feedback-form__label">Evaluate the project</span>
              <div className="feedback-form__radio-container">
                <label htmlFor="ratingGood">
                  <input
                    id="ratingGood"
                    type="radio"
                    name="rating"
                    value="good"
                    defaultChecked
                  />
                  <span className="feedback-form__rating icon--smile-good" />
                </label>
                <label htmlFor="ratingMaybe">
                  <input
                    id="ratingMaybe"
                    type="radio"
                    name="rating"
                    value="maybe"
                  />
                  <span className="feedback-form__rating icon--smile-maybe" />
                </label>
                <label htmlFor="ratingBad">
                  <input
                    id="ratingBad"
                    type="radio"
                    name="rating"
                    value="bad"
                  />
                  <span className="feedback-form__rating icon--smile-bad" />
                </label>
              </div>
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
          <div className="feedback-form__section feedback-form__section--wide">
            <label className="feedback-form__check">
              <input className="feedback-form__checkbox" type="checkbox" />
              agree to send my data
            </label>
            <button className="button feedback-form__button" type="submit">
              Create feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
