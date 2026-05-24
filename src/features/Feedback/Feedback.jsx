import "./Feedback.scss";
import { useState, useEffect } from "react";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";
import { FeedbackNotice } from "./FeedbackNotice/FeedbackNotice";
import { FeedbackCard } from "./FeedbackCard/FeedbackCard";

export function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [isNoticeShow, setIsNoticeShow] = useState(false);

  const onSubmit = (data) => {
    const picture = window.URL.createObjectURL(data.picture[0]);
    setFeedback([...feedback, { ...data, picture }]);
  };

  useEffect(() => {
    if (feedback.length !== 0) {
      setIsNoticeShow(true);
      setTimeout(() => setIsNoticeShow(false), 4000);
    }
  }, [feedback]);

  const createCard = () => {
    const cards = feedback.map((item) => (
      <FeedbackCard key={item.username} feedback={item} />
    ));
    return <ul className="feedback__list">{cards}</ul>;
  };

  return (
    <section className="feedback">
      <span className="feedback__img" />
      <div className="wrapper feedback__wrapper">
        <h2 className="feedback__header">Feedback</h2>
        <FeedbackForm onSubmit={onSubmit} />
        {feedback && createCard()}
      </div>
      {isNoticeShow && <FeedbackNotice />}
    </section>
  );
}
