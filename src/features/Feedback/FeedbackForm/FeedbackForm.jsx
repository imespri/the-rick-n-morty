import "./FeedbackForm.scss";
import { PersonalInfoSection } from "./PersonalInfoSection/PersonalInfoSection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CreateFeedbackSection } from "./CreateFeedbackSection/CreateFeedbackSection";

export function FeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("add feedback");
  };
  return (
    <div className="feedback-form">
      <h3 className="feedback-form__header">Send us your feedback!</h3>
      <div className="feedback-form__container">
        <form className="feedback-form__form" onSubmit={handleSubmit}>
          <PersonalInfoSection />
          <ReviewSection />
          <CreateFeedbackSection />
        </form>
      </div>
    </div>
  );
}
