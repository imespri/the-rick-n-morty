import "./Feedback.scss";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";

export function Feedback() {
  return (
    <section className="feedback">
      <span className="feedback__img" />
      <div className="wrapper feedback__wrapper">
        <h2 className="feedback__header">Feedback</h2>
        <FeedbackForm />
      </div>
    </section>
  );
}
