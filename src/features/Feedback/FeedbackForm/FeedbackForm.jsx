import "./FeedbackForm.scss";
import { useForm } from "react-hook-form";
import { PersonalInfoSection } from "./PersonalInfoSection/PersonalInfoSection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CreateFeedbackSection } from "./CreateFeedbackSection/CreateFeedbackSection";

export function FeedbackForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="feedback-form">
      <h3 className="feedback-form__header">Send us your feedback!</h3>
      <div className="feedback-form__container">
        <form className="feedback-form__form" onSubmit={handleSubmit(onSubmit)}>
          <PersonalInfoSection register={register} />
          <ReviewSection register={register} />
          <CreateFeedbackSection register={register} />
        </form>
      </div>
    </div>
  );
}
