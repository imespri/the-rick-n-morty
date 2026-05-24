import "./FeedbackForm.scss";
import { useForm } from "react-hook-form";
import { PersonalInfoSection } from "./PersonalInfoSection/PersonalInfoSection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CreateFeedbackSection } from "./CreateFeedbackSection/CreateFeedbackSection";

export function FeedbackForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const sendData = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="feedback-form">
      <h3 className="feedback-form__header">Send us your feedback!</h3>
      <div className="feedback-form__container">
        <form className="feedback-form__form" onSubmit={handleSubmit(sendData)}>
          <PersonalInfoSection register={register} errors={errors} />
          <ReviewSection register={register} errors={errors} />
          <CreateFeedbackSection
            register={register}
            errors={errors}
            watch={watch}
          />
        </form>
      </div>
    </div>
  );
}
