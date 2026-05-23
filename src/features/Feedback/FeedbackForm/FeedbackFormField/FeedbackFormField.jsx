import "./FeedbackFormField.scss";
import { FeedbackInlineError } from "../FeedbackInlineError/FeedbackInlineError";

export function FeedbackFormField({ children, error }) {
  return (
    <div className="feedback-form__field">
      {children}
      {error ? <FeedbackInlineError errorType={error.type} /> : null}
    </div>
  );
}
