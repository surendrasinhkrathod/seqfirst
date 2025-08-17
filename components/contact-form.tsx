// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import styles from "../styles/contact.module.scss";

import Arrow from "../images/icon-send.svg"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknljgvy");

  const checkFieldErrors = () => {
    if ( document.querySelectorAll('input:invalid, textarea:invalid').length > 0 ) {
      const allFields = document.querySelectorAll('input, textarea');
      allFields.forEach(field => {
        field.classList.remove('invalid');
      });

      const invalidFields = document.querySelectorAll('input:invalid, textarea:invalid');
      invalidFields.forEach(field => {
        field.classList.add('invalid');
      });
    }
  }

  if (state.succeeded) {
    return <p>Thank you for contacting SeqFirst!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={'row'}>
        <div className={'col-6'}>
          <label htmlFor="first-name">First Name <span className={styles.required}>*</span></label>
          <input
            id="first-name"
            type="text"
            name="first-name"
            data-lpignore="true"
            className={styles.contactInput}
            required
          />
          <ValidationError
            prefix="First Name"
            field="first-name"
            errors={state.errors}
          />
        </div>
        <div className={'col-6'}>
          <label htmlFor="last-name">Last Name <span className={styles.required}>*</span></label>
          <input
            id="last-name"
            type="text"
            name="last-name"
            data-lpignore="true"
            className={styles.contactInput}
            required
          />
          <ValidationError
            prefix="Last Name"
            field="last-name"
            errors={state.errors}
          />
        </div>
      </div>
      <label htmlFor="email" className={styles.label}>Email Address <span className={styles.required}>*</span></label>
      <input
        id="email"
        type="email"
        name="email"
        className={styles.contactInput}
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" className={styles.label}>Message <span className={styles.required}>*</span></label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className={styles.contactInput}
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className={styles.contactButton} onClick={checkFieldErrors}>
        Send <Arrow />
      </button>
    </form>
  );
}

export default ContactForm;
