import "./FeedbackNotice.scss";

export function FeedbackNotice() {
  return (
    <div className="notice">
      <div className="notice__wrapper">
        <span className="notice__icon" />
        <div className="notice__column">
          <p className="notice__title">Good news!</p>
          <p className="notice__description">
            We have just added your feedback, thanks
          </p>
        </div>
      </div>
    </div>
  );
}
