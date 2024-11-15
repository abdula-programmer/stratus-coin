import React, { useEffect, useRef, useState } from "react";
import styles from "./Feedback.module.css";
import stylesGeneral from "../styles.module.css";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const nameRef = useRef();
  const telRef = useRef();
//

  useEffect(() => emailjs.init("egMWmP8VUbfhsf7NY"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_30s7mgs";
    const templateId = "template_vyewj0j";
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current.value,
        message: telRef.current.value
      });
      alert("Данные отправлены на почту, с вами скоро свяжутся!");
      nameRef.current.value = ''
      telRef.current.value = ''
    } catch (error) {
      console.log(error);
    } 
  };



  return (
    <div className={styles["feedback"]}>
      <img src="/img/feedback-bg.jpeg" className={styles["feedback-bg"]} />
      <div
        className={`${stylesGeneral["container"]} ${styles["feedback-container"]}`}
      >
        <h1
          className={`${styles["feedback-title"]} ${stylesGeneral["title-block"]}`}
        >
          Остались вопросы?
        </h1>
        <div
          className={`${stylesGeneral["block-text"]} ${styles["feedback-text"]}`}
        >
          Заполните форму ниже и наши специалисты ответят на любые интересующие
          Вас вопросы.
        </div>
        <form
          action=""
          className={styles["form"]}
          onSubmit={handleSubmit}
        >
          <div className={styles["form-top"]}>
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles["name"]}
              required
              ref={nameRef}
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              className={styles["tel"]}
              required
              ref={telRef}
            />
            <button
              className={styles["send-feedback"]}
              id="send_feedback"
              type="submit"
            >
              Получить консультацию
            </button>
          </div>

          <label
            htmlFor="feedback_p_check"
            className={styles["feedback-check"]}
          >
            <input
              type="checkbox"
              name="p_check"
              id="feedback_p_check"
              required
            />
            Я даю свое согласие на обработку моих персональных данных
          </label>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
