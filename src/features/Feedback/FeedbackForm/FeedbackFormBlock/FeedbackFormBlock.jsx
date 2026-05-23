import "./FeedbackFormBlock.scss";
import { FeedbackInlineError } from "../FeedbackInlineError/FeedbackInlineError";

export function FeedbackFormBlock({ children, error }) {
  console.log(error);
  return (
    <div className="feedback-form__block">
      {children}
      <FeedbackInlineError errorType={error?.type ? error.type : null} />
    </div>
  );
}
