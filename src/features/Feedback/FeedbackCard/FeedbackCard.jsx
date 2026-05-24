import "./FeedbackCard.scss";
import classNames from "classnames";

export function FeedbackCard({ feedback }) {
  console.log(feedback);
  return (
    <li className="feedback-card">
      <div className="feedback-card__wrapper">
        <img
          className="feedback-card__picture"
          src={feedback.picture}
          alt="Profile"
        />
        <div className="feedback-card__column">
          <h3 className="feedback-card__header">{feedback.username}</h3>
          <h4 className="feedback-card__subheader">{feedback.email}</h4>
          <div className="feedback-card__info">
            <span className="feedback-card__info-item">
              {feedback.continent}
            </span>
            <span className="feedback-card__info-item">
              ({feedback.birthday})
            </span>
          </div>
        </div>
        <span
          className={classNames("feedback-card__info-item", {
            "icon--smile-good": feedback.rating === "good",
            "icon--smile-maybe": feedback.rating === "maybe",
            "icon--smile-bad": feedback.rating === "bad",
          })}
        />
        <p className="feedback-card__description">{feedback.opinionText}</p>
      </div>
    </li>
  );
}
