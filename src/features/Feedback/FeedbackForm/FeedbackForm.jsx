import "./FeedbackForm.scss";
import { useForm } from "react-hook-form";
import { PersonalInfoSection } from "./PersonalInfoSection/PersonalInfoSection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CreateFeedbackSection } from "./CreateFeedbackSection/CreateFeedbackSection";

export function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="feedback-form">
      <h3 className="feedback-form__header">Send us your feedback!</h3>
      <div className="feedback-form__container">
        <form className="feedback-form__form" onSubmit={handleSubmit(onSubmit)}>
          <PersonalInfoSection register={register} errors={errors} />
          <ReviewSection register={register} errors={errors} />
          <CreateFeedbackSection register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
