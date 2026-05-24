import "./FeedbackForm.scss";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PersonalInfoSection } from "./PersonalInfoSection/PersonalInfoSection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CreateFeedbackSection } from "./CreateFeedbackSection/CreateFeedbackSection";
import { FeedbackNotice } from "./../FeedbackNotice/FeedbackNotice";

export function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [feedback, setFeedback] = useState(null);
  const [isNoticeShow, setIsNoticeShow] = useState(false);

  const onSubmit = (data) => setFeedback(data);

  useEffect(() => {
    if (feedback) {
      setIsNoticeShow(true);
      setTimeout(() => setIsNoticeShow(false), 4000);
    }
  }, [feedback]);

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
      {isNoticeShow && <FeedbackNotice />}
    </div>
  );
}
