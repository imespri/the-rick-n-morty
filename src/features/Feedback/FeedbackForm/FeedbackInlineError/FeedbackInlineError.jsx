import "./FeedbackInlineError.scss";

export function FeedbackInlineError({ errorType }) {
  const createErrorMessage = (type) => {
    switch (type) {
      case "required":
        return "* This field must not be empty";
      case "minLength":
        return "* Value of this field too short";
      case "maxLength":
        return "* Value of this field too long";
      case "pattern":
        return "* Wrong value";
      default:
        return "* Wrong value";
    }
  };

  return <span className="inline-error">{createErrorMessage(errorType)}</span>;
}
